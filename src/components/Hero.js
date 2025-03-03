import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/Hero.css';

function Hero() {

  const assertionCode = `const { locators } = require('../globalLocators.js');
const abPlaywright = require('alphabin-pw');
const { test, expect } = require('@playwright/test');
const playwright = require('playwright');

test('Assertions Demo', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('https://gh-users-search.netlify.app/');
  await page.reload();
  await page.locator(locators['Navigation in Div']).click();
  await expect(page).toHaveURL('https://gh-users-search.netlify.app/');
  await expect(page).toHaveTitle('Github User - Starter');
  await page.locator(locators['Link in Header']).hover();
  
  await page.close();
});`;

  const locatorsCode = `const locators = {
  'Navigation in Div': "div > main > nav",
  'Link in Header': "header > a",
};`;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="animated-heading">
          <span className="heading-line">Generate E2E Tests</span> 
          <span className="highlight gradient-text">Effortlessly</span>
        </h1>
        <p>
        E2E Test Generator is a powerful VS Code extension that helps you create, record, and automate
          cross-browser tests with ease. Say goodbye to manual test writing!
        </p>
        <div className="hero-buttons">
          <a href="https://marketplace.visualstudio.com/items?itemName=TestGenXTeam.e2e-test-generator"
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer">
            Get the VS Code Extension
          </a>
          <a href="#demo" className="watch-demo-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            Watch Demo
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">65+</span>
            <span className="stat-label">Installations</span>
          </div>
          <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">Beta</span>
            <span className="stat-label">Version</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
      
        <div className="code-preview">
          <div className="code-header">
            <div className="code-dot"></div>
            <div className="code-dot"></div>
            <div className="code-dot"></div>
            <span>Assertions.spec.js</span>
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={document.documentElement.getAttribute('data-theme') === 'dark' ? vscDarkPlus : {
              ...tomorrow,
              'code[class*="language-"]': {
                ...tomorrow['code[class*="language-"]'],
                backgroundColor: '#f8f9fa',
                color: '#495057'
              },
              '.token.keyword': {
                color: '#6f42c1'
              },
              '.token.string': {
                color: '#22863a'
              },
              '.token.function': {
                color: '#005cc5'
              },
              '.token.comment': {
                color: '#6a737d',
                fontStyle: 'italic'
              },
              '.token.number': {
                color: '#e36209'
              }
            }}
            className="code-content"
            showLineNumbers
            customStyle={{
              backgroundColor: '#f8f9fa',
              padding: '1.5rem'
            }}
          >
            {assertionCode}
          </SyntaxHighlighter>
        </div>
        <div className="code-preview">
          <div className="code-header">
            <div className="code-dot"></div>
            <div className="code-dot"></div>
            <div className="code-dot"></div>
            <span>globalLocators.js</span>
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={document.documentElement.getAttribute('data-theme') === 'dark' ? vscDarkPlus : {
              ...tomorrow,
              'code[class*="language-"]': {
                ...tomorrow['code[class*="language-"]'],
                backgroundColor: '#f8f9fa',
                color: '#495057'
              },
              '.token.keyword': {
                color: '#6f42c1'
              },
              '.token.string': {
                color: '#22863a'
              },
              '.token.function': {
                color: '#005cc5'
              },
              '.token.comment': {
                color: '#6a737d',
                fontStyle: 'italic'
              },
              '.token.number': {
                color: '#e36209'
              }
            }}
            className="code-content"
            showLineNumbers
            customStyle={{
              backgroundColor: '#f8f9fa',
              padding: '1.5rem'
            }}
          >
            {locatorsCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}

export default Hero;