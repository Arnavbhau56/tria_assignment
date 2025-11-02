# Tria Assignment - Contact List Application

I have deployed in vercel : https://triaassignment-six.vercel.app/

Backend is hosted in AWS, and set the apis to store data of contact list and other things there only, postgres database.
I have also made some more contact list : 

1. ecell.in/esummit/contact
2. https://www.ecell.in/ca/#contact

I have made the list basically department wise assuming it is for to collect the data of the institue if it is for other pupose like a directory then there might not be any need of images, and a simple list may do.


## 📋 Features

### Core Features
- **View Contacts**: Display all contacts organized by department with elegant card layouts
- **Search Functionality**: Real-time search by contact name with instant filtering
- **Add New Contacts**: Complete form to add new contacts with photo upload capability

### Additional Features
- **Department Grouping**: Contacts automatically categorized by department
- **Form Validation**: Client-side validation with user-friendly error messages
- **Real-time API Integration**: Live backend integration for data persistence

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties and responsive design
- **Icons**: Font Awesome 6
- **Alerts**: SweetAlert2 for user notifications
- **Backend**: Custom Django REST API hosted on AWS
- **Deployment**: Vercel (Frontend) + AWS (Backend)

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── ContactCard.tsx     # Individual contact display
│   ├── SearchBar.tsx       # Search input component
│   └── AddContactForm.tsx  # Modal form for adding contacts
├── types/
│   └── Contact.ts          # TypeScript interfaces
├── data/
│   └── mockContacts.ts     # API service functions
├── config/
│   └── environment.ts      # Environment configuration
└── App.tsx                 # Main application component
```

### API Integration
- **GET** `/contact` - Fetch all contacts
- **POST** `/add/` - Add new contact with form data and image upload

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/tria-assignment.git
cd tria-assignment
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## 🎨 Design Choices

### UI/UX Decisions
- **Dark Theme**: Professional appearance suitable for business applications
- **Card-based Layout**: Clear visual separation and hierarchy for contact information
- **Department Grouping**: Logical organization improving user experience
- **Mobile-first Approach**: Responsive design ensuring usability across all devices
- **No Hover Effects**: Consistent experience across touch and non-touch devices

### Technical Decisions
- **TypeScript**: Type safety and better development experience
- **Component Architecture**: Modular, reusable components for maintainability
- **CSS Custom Properties**: Consistent theming and easy customization
- **Form Validation**: Client-side validation for immediate user feedback
- **Error Handling**: Comprehensive error states with user-friendly messages

## 📱 Responsive Design

- **Desktop**: Full-width layout with side-by-side search and add functionality
- **Tablet**: Optimized spacing and font sizes
- **Mobile**: Stacked layout with full-width components for better touch interaction

## 🔧 Configuration

### Environment Setup
The application uses a custom backend API. Configuration is managed in `src/config/environment.ts`:

```typescript
export const BASE_URL = 'https://apiserver.ecell.in/eureka25';
```

### Backend Integration
- **Hosted on AWS**: Leveraging cloud infrastructure for reliability and scalability
- **RESTful API**: Standard HTTP methods for CRUD operations
- **File Upload Support**: Multipart form data for profile image uploads
- **CORS Enabled**: Cross-origin requests properly configured

## 📊 Data Structure

### Contact Interface
```typescript
interface Contact {
  id: number;
  name: string;
  title: string;
  department: string;
  image: string;
  linkedin: string;
  email: string;
  contact: string;
}
```

## 🔍 Key Implementation Details

### Search Functionality
- Real-time filtering without API calls for better performance
- Case-insensitive search across contact names
- Maintains department grouping in search results

### Form Validation
- Required field validation
- Email format validation
- File type validation for image uploads
- Custom SweetAlert2 styling with Poppins font

### API Error Handling
- Network error handling
- Server response error handling
- User-friendly error messages
- Loading states during API calls

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel via GitHub integration
```

### Backend (AWS)
- Django REST API deployed on AWS EC2
- Static file serving configured for image uploads
- CORS properly configured for frontend domain

## 🎯 Assumptions Made

1. **Contact Data**: Assumed contacts have department affiliations for better organization
2. **Image Upload**: Assumed profile pictures are optional but enhance user experience
3. **Search Scope**: Limited search to contact names for simplicity and performance
4. **Validation**: Implemented client-side validation assuming server-side validation exists
5. **Responsive Breakpoints**: Used standard breakpoints (768px, 480px, 320px) for device compatibility

## 🔮 Future Enhancements

- Contact editing functionality
- Advanced search filters (department, title)
- Contact favorites/bookmarking
- Export contacts functionality
- Bulk operations
- Contact import from CSV/vCard

## 👨‍💻 About the Developer

Built by **Arnav Gautam**, Web & Technical Head at The Entrepreneurship Cell, IIT Bombay. This project demonstrates full-stack development capabilities with modern React practices and cloud deployment expertise.

## 📄 License

This project is created for assessment purposes as part of the Tria Assignment.