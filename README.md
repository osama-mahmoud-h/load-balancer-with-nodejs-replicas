# Load-Balanced Node.js Application with Docker and NGINX

## Introduction

This project demonstrates the setup of a load-balanced Node.js application using Docker and NGINX. Load balancing helps distribute incoming traffic across multiple instances of an application, improving performance and scalability.

## Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. Clone this repository:


2. Create a `.env` file in the root directory and set environment variables:

  PORT=6001
  INSTANCE_ID=1

3. Modify the Node.js application code in `app.js` as needed.

4. Build and start containers using Docker Compose:


5. Access the application in your browser at [http://localhost:7001](http://localhost:7001).

6. Test load balancing with concurrent requests using tools like Postman or cURL.

## Project Structure

- `app/` - Contains Node.js application code.
- `Dockerfile` - Docker config for Node.js app.
- `nginx.conf` - NGINX config for load balancing.
- `docker-compose.yml` - Docker Compose config for services.

## Load Balancing

NGINX serves as a load balancer, evenly distributing requests among multiple Node.js instances. This optimizes performance and ensures resource efficiency.

## Concurrent Requests

Load balancing enables efficient handling of concurrent requests across Node.js instances. This demonstrates the effectiveness of load balancing.

## example 
![Alt Text]("./imgs/rep1.png")
![Alt Text]("./imgs/rep2.png")

## Conclusion

This project showcases the integration of Docker, NGINX, and Node.js to create a load-balanced application. The use of load balancing enhances traffic management and application performance.

## Contributing

Contributions are welcome! Fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
