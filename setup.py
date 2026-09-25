from setuptools import setup, find_packages

setup(
    name="devops-packaged-python-app",
    version="1.0.0",
    description="Production-grade packaged Python modular configuration framework.",
    author="Kotonko",
    packages=find_packages(),
    install_requires=[
        "Django>=4.2.5,<5.0.0",
        "django-environ==0.11.2",
        "psycopg2-binary==2.9.9",
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.8",
)
