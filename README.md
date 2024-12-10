# **Quiz**

Welcome to the **Quiz** repository! This project is a platform for creating quizzes dynamically based on user prompts and displaying results.

## **Features**

- **Dynamic Quiz Generation**: Generate quizzes based on any given topic or prompt.
- **Interactive Quiz Interface**: Users can answer questions and view real-time feedback or final scores.
- **Authentication**: Secure login using Google authentication.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Modern Tech Stack**: Built with Django, Next.js, and NextUI for a sleek and user-friendly interface.

---

## **Tech Stack**

### **Frontend**
- [Next.js](https://nextjs.org/) (React Framework)
- Tailwind CSS for styling
- [NextUI](https://nextui.com/) (UI Library)

### **Backend**
- Django Framework
- Django Rest Framework (DRF) for APIs
- PostgreSQL for database

---

## **Getting Started**

### **Prerequisites**
- Node.js (v16 or higher)
- Python (v3.10 or higher)
- PostgreSQL database
- Git

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chinyereunamba/quiz.git
   cd yourproject
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Create and activate a virtual environment:
     ```bash
     python -m venv env
     source env/bin/activate # For Linux/Mac
     env\Scripts\activate    # For Windows
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Apply migrations:
     ```bash
     python manage.py migrate
     ```
   - Start the backend server:
     ```bash
     python manage.py runserver
     ```

3. **Frontend Setup**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. Open your browser and visit:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:8000`

---

## **Environment Variables**

Create a `.env` file in both the `frontend` and `backend` directories with the following variables:

### **Frontend**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```

### **Backend**
```env
SECRET_KEY=your-django-secret-key
DEBUG=True
DATABASE_URL=postgres://user:password@localhost:5432/dbname
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

---

## **Usage**

1. Register or log in using Google authentication.
2. Enter a topic or prompt to generate a quiz.
3. Answer the questions interactively and view feedback.
4. Review your results at the end of the quiz.

---

## **Screenshots**

- Add screenshots of the application here to showcase its features.

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## **License**

This project is licensed under the [Apache License](LICENSE).

---

## **Contact**

For inquiries or issues, please reach out to:
- **Name**: Chinyere Unamba
- **Email**: cunamba2@gmail.com
