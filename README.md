# 📚 Mentoring Feature — Automation Testing Documentation

## 🌟 Objective  
To ensure that the **Mentoring feature** added to the **Deals Platform** can run well, safely, stably, and in accordance with business and user needs.

---

## 🧪 Types of Testing  

| Type               | Purpose                                                                 |
|:------------------|:------------------------------------------------------------------------|
| **Integration Testing** | Ensure the Mentoring feature is well integrated with other systems in the application. |
| **Functional Testing**  | Ensure that all basic functions of the Mentoring feature run according to the established requirements. |
| **Smoke Testing**        | Test the basic features after a new build or deployment to ensure the app runs smoothly and critical features are accessible. |
| **Sanity Testing**       | Ensure that newly added or changed features do not cause issues in the main application flow. |
| **Regression Testing**   | Ensure that new features do not break existing functionality or change existing behavior. |
| **UI Testing**           | Ensure that the UI (both on web and mobile) is user-friendly, responsive, and in accordance with the design. |
| **API Testing**          | Ensure that APIs for mentoring features (searching, booking, canceling) provide correct, fast, and secure responses. |
| **Performance Testing**  | Test how the feature performs under high load and how quickly the system responds. |

---

## 🔍 Key Areas of Focus  

- Mentor & Mentee Registration & Login  
- Mentor & Mentee Login  
- Search & Filter Mentors  
- Select Mentors  
- Booking & Scheduling Mentoring Sessions  
- Notifications & Reminders  
- Mentor Feedback & Rating System  

---

## 🌐 Environments  

| Environment | Purpose                                         |
|:------------|:------------------------------------------------|
| **Development** | Early bug finding and quick feedback |
| **Staging**     | Full end-to-end, regression, and performance testing |
| **Production**  | Basic sanity checks after deployment |

---

## 📌 Assumptions  

- Mentoring feature is for **logged-in mentees only**.  
- User must be logged in to **book a mentor**.  

---

## ✅ High-Level Test Scenarios  

### 📌 Register  
- Register new user as **Jobseeker/Mentee** via email or Google  
- Register new user as **Mentor** via email or Google  
- Register new user as **Employer** via email or Google  

### 📌 Login  
- Login with email or Google  
- Forgot password flow  

### 📌 Search & Filter  
- Search by **name**, **company**, **role**, **industry**, **university**, **major**, and **topic**  
- Filter by **level**, **most relevant**, **nearby availability**, or **latest**  

### 📌 Select Mentor  
- View mentor profiles  
- View mentor reviews  

### 📌 Booking Mentor  
- Book a session with available time slots  
- Book multiple sessions  
- Reschedule a session  
- Cancel a booking  

### 📌 Notifications  
- Receive booking confirmation  
- Receive reminders  
- Reschedule & cancel notifications  

### 📌 Feedback and Ratings  
- Mentee rates mentor after session  
- Leave feedback comments  
- View average mentor rating  
- Get and download certificate  

---
