# Serverless E-Commerce Order Processing System on AWS

## Project Overview

This project presents the development of a **Serverless E-Commerce Order Processing System** on Amazon Web Services (AWS), with a strong focus on **scalability**, **cost-efficiency**, and **security**. The solution is fully serverless, leveraging core AWS services to provide a robust backend architecture alongside a responsive and secure frontend user experience.

The frontend interface is a static website hosted on **Amazon S3** and accelerated via **Amazon CloudFront** to ensure fast global access. The backend is constructed using **API Gateway** for request routing, **AWS Lambda** for business logic execution, and **Amazon DynamoDB** for fast and scalable NoSQL data storage. Product media and static assets are also served from S3.

To ensure the system is production-grade and secure, **AWS WAF (Web Application Firewall)** is integrated with both CloudFront and API Gateway. This adds protection against common web exploits such as SQL injection, Cross-site Scripting (XSS), and other threats identified in the OWASP Top 10.

---

## Project Architecture

*(Include architecture diagram or link if available)*

---

## Implementation

- Frontend resources are stored in an S3 bucket with static website hosting enabled. The S3 bucket policy restricts access to only CloudFront.
- Setting up **S3 with CloudFront** improves website performance by delivering content through a global CDN, reducing latency for users. It also enhances security by enabling HTTPS and integrating with AWS WAF to protect against common web threats.
- The website is accessed via the CloudFront distribution domain name.
- Two sets of API resources are set up: one for accessing **product details** and another for **order details**. Each resource supports `GET` and `POST` methods, deployed in the dev environment and successfully tested.
- Four Lambda functions were created to handle different aspects of the application, with API methods integrated accordingly.
- **DynamoDB** was chosen for its high performance, scalability, and seamless integration with Lambda. It provides low-latency data access, requires no server management, and is ideal for storing flexible product and order data.
- S3 is used as media storage and for static website hosting.
- **AWS WAF** protects the application against common web threats like SQL injection and XSS by securing both the UI (via CloudFront) and API (via API Gateway).

---

## Security

- AWS WAF integrated with CloudFront and API Gateway.
- Common security rules added to protect against OWASP Top 10 threats.
- Monitoring and request details are handled via WAF metrics and logs.

---

## Final Takeaway

Through this project, I gained practical experience building and securing a serverless e-commerce platform on AWS. I learned how to integrate Lambda, API Gateway, DynamoDB, S3, and CloudFront into a cohesive architecture, and implement AWS WAF to protect against common web threats. This hands-on experience deepened my understanding of deploying scalable and cost-effective cloud applications while following industry-standard security practices. It has prepared me to confidently design and implement secure, serverless systems in real-world environments.

---

## License

*(Add license information if needed)*

