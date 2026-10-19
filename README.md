# Student Directory

A Student Directory page built with React and Bootstrap, based on a provided reference UI.

## Features

- **React Components & Props** — the page is broken into reusable components (`AppNavbar`, `AppBreadcrumb`, `StudentCard`, `AppPagination`, `AppAlert`, `ProfileModal`, `AppFooter`), each receiving data via props.
- **Bootstrap Navbar** — top navigation bar with brand, links, and search.
- **Bootstrap Breadcrumb** — shows the current page path.
- **Bootstrap Cards** — each student is displayed in a card (name, ID, major, year, GPA).
- **Bootstrap Buttons** — "View Profile" and "Add New Student" actions.
- **Bootstrap Pagination** — students are paginated, 4 per page.
- **Bootstrap Alert** — dismissible alert shown after viewing a profile.
- **Responsive Grid Layout** — cards reflow using Bootstrap's grid system across screen sizes.
- **View counter** — clicking "View Profile" increments that student's view count and opens a modal with their full details.

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
