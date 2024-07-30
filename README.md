# GitHub Action - Build and Push Docker Image

## Overview

This repository contains a GitHub Actions workflow to build and push a Docker image for a Next.js application to Docker Hub.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Automated build and push of Docker images.
- Uses GitHub Actions to streamline the CI/CD process.

## Prerequisites

- A Docker Hub account and repository.
- GitHub repository with Dockerfile and Next.js app.
- GitHub Secrets configured for Docker Hub authentication (`DOCKER_USERNAME` and `DOCKER_TOKEN`).

## Setup

1. **Create a Docker Hub Repository**:
   - Log in to Docker Hub and create a repository if you don't have one.

2. **Add GitHub Secrets**:
   - Go to `Settings` > `Secrets and variables` > `Actions` in your GitHub repository.
   - Add `DOCKER_USERNAME` and `DOCKER_TOKEN` secrets with your Docker Hub credentials.

3. **Configure the GitHub Actions Workflow**:
   - Ensure your workflow file is in `.github/workflows/` directory.

   Example file: `.github/workflows/main.yml`

