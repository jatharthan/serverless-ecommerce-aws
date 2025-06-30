# Serverless E-Commerce Order Processing System on AWS

## Project Overview

This project presents the development of a **Serverless E-Commerce Order Processing System** on Amazon Web Services (AWS), with a strong focus on **scalability**, **cost-efficiency**, and **security**. The solution is fully serverless, leveraging core AWS services to provide a robust backend architecture alongside a responsive and secure frontend user experience.

The frontend interface is a static website hosted on **Amazon S3** and accelerated via **Amazon CloudFront** to ensure fast global access. The backend is constructed using **API Gateway** for request routing, **AWS Lambda** for business logic execution, and **Amazon DynamoDB** for fast and scalable NoSQL data storage. Product media and static assets are also served from S3.

To ensure the system is production-grade and secure, **AWS WAF (Web Application Firewall)** is integrated with both CloudFront and API Gateway. This adds protection against common web exploits such as SQL injection, Cross-site Scripting (XSS), and other threats identified in the OWASP Top 10.

---

## Project Architecture

![image](https://github.com/user-attachments/assets/3a9efd51-118a-41c7-8031-768fd197a116)


---

---

## License

*(Add license information if needed)*

