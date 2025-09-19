/**
 * PUBLIC_INTERFACE
 * loadResumeData - Loads resume JSON from localStorage or provided object, with lightweight validation.
 */
const DEFAULT_SCHEMA = {
  basic: ['name', 'role', 'summary', 'location', 'email', 'links'],
  education: [], participation: [], certifications: [], interests: [], languages: [], internships: []
};

function isArrayOfObjects(v) { return Array.isArray(v) && v.every(x => typeof x === 'object'); }

export function validateResume(data) {
  if (!data || typeof data !== 'object') return { valid: false, errors: ['Data must be an object'] };
  const errors = [];

  // required top-level keys
  ['basic', 'education', 'participation', 'certifications', 'interests', 'languages', 'internships']
    .forEach(k => { if (!(k in data)) errors.push(`Missing key: ${k}`); });

  if (data.basic && typeof data.basic !== 'object') errors.push('basic must be object');
  ['education', 'participation', 'certifications', 'interests', 'languages', 'internships']
    .forEach(k => { if (data[k] && !Array.isArray(data[k])) errors.push(`${k} must be array`); });

  if (data.links && !Array.isArray(data.links)) errors.push('links must be array');
  if (data.education && !isArrayOfObjects(data.education)) errors.push('education must be array of objects');
  if (data.participation && !isArrayOfObjects(data.participation)) errors.push('participation must be array of objects');
  if (data.certifications && !isArrayOfObjects(data.certifications)) errors.push('certifications must be array of objects');
  if (data.languages && !Array.isArray(data.languages)) errors.push('languages must be array of strings or objects');

  return { valid: errors.length === 0, errors };
}

// PUBLIC_INTERFACE
export async function loadResumeData(source) {
  // source can be object, URL string (future), or fallback to localStorage
  if (source && typeof source === 'object') {
    const result = validateResume(source);
    if (!result.valid) throw new Error(`Resume validation failed: ${result.errors.join('; ')}`);
    return source;
  }
  try {
    const raw = localStorage.getItem('resume-data');
    if (raw) {
      const parsed = JSON.parse(raw);
      const result = validateResume(parsed);
      if (!result.valid) throw new Error(result.errors.join('; '));
      return parsed;
    }
  } catch (e) {
    console.warn('Failed to load resume from localStorage:', e.message);
  }
  // dynamic import example fallback
  try {
    const mod = await import('../data/resume.example.json');
    const data = mod.default || mod;
    const result = validateResume(data);
    if (!result.valid) throw new Error(result.errors.join('; '));
    return data;
  } catch (e) {
    throw new Error('No resume data available');
  }
}

// PUBLIC_INTERFACE
export function saveResumeData(data) {
  const res = validateResume(data);
  if (!res.valid) throw new Error(`Resume validation failed: ${res.errors.join('; ')}`);
  try {
    localStorage.setItem('resume-data', JSON.stringify(data));
  } catch (e) {
    console.warn('Failed to save resume-data:', e.message);
  }
}
