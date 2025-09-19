#!/bin/bash
cd /home/kavia/workspace/code-generation/cybersecure-portfolio-137280-137283/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

