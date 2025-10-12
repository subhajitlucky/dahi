# Contributing to Super Dahi 🥛

First off, thank you for considering contributing to Super Dahi! It's people like you who make the fermentation community vibrant and knowledgeable.

## 🌟 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (screenshots, code snippets)
- **Describe the behavior you observed** and what you expected
- **Include your environment details** (browser, OS, screen size)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any similar features** in other projects if applicable

### 📚 Content Contributions

We especially welcome contributions related to:

- **Fermentation techniques** and traditional methods
- **Scientific research** on probiotics and gut health
- **Regional variations** of dahi and yogurt making
- **Troubleshooting tips** from your experience
- **Community stories** and success cases

### 🎨 Design Improvements

If you have design or UX suggestions:

- Maintain the **cultural aesthetic** (saffron, temple stone colors)
- Keep **accessibility** in mind (WCAG AA compliance)
- Ensure **mobile responsiveness**
- Follow the existing **design patterns**

### 💻 Code Contributions

#### Getting Started

1. **Fork the repository** to your own GitHub account
2. **Clone the project** to your machine
   ```bash
   git clone https://github.com/YOUR-USERNAME/dahi.git
   cd dahi
   ```
3. **Create a branch** for your work
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Install dependencies**
   ```bash
   npm install
   ```
5. **Start the development server**
   ```bash
   npm run dev
   ```

#### Development Workflow

1. **Make your changes** in your feature branch
2. **Test thoroughly** across different browsers and screen sizes
3. **Run the linter** to ensure code quality
   ```bash
   npm run lint
   ```
4. **Commit your changes** with clear, descriptive messages
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request** from your fork to the main repository

#### Commit Message Guidelines

Follow this format for commit messages:

- **Add**: New feature or content
- **Fix**: Bug fix
- **Update**: Improvements to existing features
- **Remove**: Removing features or code
- **Docs**: Documentation changes
- **Style**: CSS/styling changes
- **Refactor**: Code restructuring without changing functionality

Examples:
```
Add: Traditional Bengali dahi recipe to Traditional page
Fix: Mobile navigation menu not closing on route change
Update: Improve Recipe page layout for better readability
Docs: Add troubleshooting section to README
Style: Refine color palette for better contrast
```

#### Code Style Guidelines

- Use **functional components** with React Hooks
- Follow **consistent naming conventions**:
  - Components: `PascalCase`
  - Files: `PascalCase.jsx` for components
  - CSS: `PascalCase.css` matching component name
  - Variables/functions: `camelCase`
- Keep components **small and focused**
- Use **descriptive variable names**
- Add **comments** for complex logic
- Maintain **consistent indentation** (2 spaces)
- Use **semantic HTML** elements
- Ensure **accessibility** (ARIA labels, alt text, keyboard navigation)

#### CSS Guidelines

- Follow **BEM methodology** where appropriate
- Use **CSS variables** from `Global.css`
- Keep styles **scoped to components**
- Maintain **mobile-first responsive design**
- Test on **multiple screen sizes**
- Preserve the **cultural aesthetic**

#### Component Structure

```jsx
import React from 'react';
import '../styles/ComponentName.css';

const ComponentName = () => {
  // State and logic here

  return (
    <div className="page component-name-page">
      <section className="section-block">
        {/* Component content */}
      </section>
    </div>
  );
};

export default ComponentName;
```

### 🧪 Testing

While we don't currently have automated tests, please ensure:

- **Manual testing** on multiple browsers (Chrome, Firefox, Safari, Edge)
- **Responsive testing** on various screen sizes
- **Accessibility testing** with keyboard navigation
- **Cross-platform testing** (desktop, tablet, mobile)

### 📝 Pull Request Process

1. **Update documentation** if you've changed functionality
2. **Add yourself to contributors** if it's your first contribution
3. **Ensure all checks pass** (linting, builds)
4. **Request review** from maintainers
5. **Address feedback** promptly and professionally
6. **Squash commits** if requested before merging

#### Pull Request Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/CSS update
- [ ] Refactoring

## Testing Done
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on mobile
- [ ] Tested keyboard navigation
- [ ] Ran linter

## Screenshots (if applicable)
Add screenshots showing changes

## Related Issues
Closes #(issue number)
```

## 🤝 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for everyone, regardless of:

- Age, body size, disability, ethnicity
- Gender identity and expression
- Level of experience
- Nationality, personal appearance, race, religion
- Sexual identity and orientation

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what's best for the community
- Showing empathy towards others

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments, personal attacks
- Public or private harassment
- Publishing others' private information
- Other conduct that could be considered inappropriate

### Enforcement

Instances of unacceptable behavior may be reported to the project maintainers. All complaints will be reviewed and investigated promptly and fairly.

## 📞 Questions?

Feel free to:

- Open an issue with the **question** label
- Email us at **lab@superdahi.co**
- Start a discussion in the **Community** section

## 🙏 Recognition

Contributors will be:

- Listed in our **Contributors** section
- Mentioned in release notes for significant contributions
- Credited in relevant documentation updates

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Super Dahi!** 

Your efforts help preserve traditional fermentation knowledge while making it accessible to modern home fermenters. Together, we're building a community that values both ancient wisdom and scientific understanding.

*"Where Ayurveda is practiced with devotion, illness has no seat."*
