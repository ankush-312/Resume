'use strict';

const projects = [
  {
    title: "Anant: Systematic Stock Forecast Engine",
    description: "Anant is a systematic stock forecast engine that predicts next-day closing prices using a combination of technical analysis, sentiment signals, fundamental data, and inter-stock influence. Built using Python, Streamlit, and libraries like TA-Lib, yFinance, scikit-learn, and FinBERT, the app features multiple modes, including self and influence-based forecasting. The project helped me strengthen my understanding of time series modeling, machine learning pipelines, Granger causality, sentiment analysis using NLP, and dashboard deployment. It also sharpened my skills in building integrated trading logic from scratch.",
    skill: "python, machine learning, time series, streamlit, ta-lib, statsmodels, finbert",
    category: "Ml",
    date: "09 July, 2025",
    url: "https://www.linkedin.com/posts/ankush-parmar-997640322_quant-machinelearning-trading-activity-7348557766518566912-uqCS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFGbsYMBcGJCJpO9BqsWK0c6B_ARGGj5nfI",
    images: [
      "images/project1/a.png",
      "images/project1/b.png",
      "images/project1/c.png",
    ],
  }, 
  {
    title: "T20 2024 Cricket World Cup Analysis",
    description: "Performed a detailed analysis of player statistics from the 2024 Cricket World Cup to identify the top-performing players and their contributions. Designed an interactive Power BI dashboard to present these insights, providing a clear and actionable overview to support team selection and performance evaluations.",
    skill: "python, numpy, pandas, power bi, beautiful soup",
    category: "Analysis",
    date: "26 August, 2024",
    url: "https://www.linkedin.com/posts/ankush-parmar-997640322_dataanalysis-cricket-t202024-activity-7233539740963098626-G9rV/?utm_source=share&utm_medium=member_desktop",
    images: [
      "images/project2/a.png",
      "images/project2/b.png",
      "images/project2/c.png",
    ],
  },
  {
    title: "Google Keep Clone",
    description: "A responsive Google Keep clone built with HTML, CSS, and JavaScript. It lets users create, edit, and delete notes with data saved in Local Storage for persistence. This project strengthened my skills in DOM manipulation, event handling, and client-side data storage.",
    skill: "html, css, js",
    category: "Web",
    date: "18 August, 2024",
    url: "https://google-keep-clone-p5z1.onrender.com/",
    images: [
      "images/project3/a.png",
      "images/project3/b.png",
      "images/project3/c.png",
    ],
  },  
  {
    title: "Personal Site",
    description: "This fully responsive personal website highlights my skills with sections like About Me, Skills, Projects, Resume, and Contact. Built using HTML, CSS, Bootstrap and JavaScript, it adapts seamlessly across devices. The project helped me improve my web development and design skills.",
    skill: "html, css, js, bootstrap, emailjs, git",
    category: "Web",
    date: "18 January, 2025",
    url: "https://ankush-resume.onrender.com/",
    images: [
      "images/project4/a.png",
      "images/project4/b.png",
      "images/project4/c.png",
    ],
  },  
  {
    title: "Hotel Reservation Cancellation Analysis and Report Creation",
    description: "This project involves exploratory data analysis (EDA) on hotel reservation data to uncover patterns behind booking cancellations. Using Python, Pandas, Matplotlib, and Seaborn, key insights were drawn from features like lead time, customer type, market segment, and more. The analysis identified trends in cancellation behavior, peak booking periods, and customer preferences. A detailed report was created to support data-driven decision-making for reducing cancellations and improving customer retention.",
    skill: "python, numpy, pandas, matplotlib, seaborn",
    category: "Analysis",
    date: "June, 2024",
    url: "https://www.linkedin.com/posts/ankush-parmar-997640322_datascience-python-dataanalysis-activity-7233786131023097856-BIYa?utm_source=share&utm_medium=member_desktop",
    images: [
      "images/project5/a.png",
      "images/project5/b.png",
      "images/project5/c.png",
    ],
  },
  {
    title: "HR Analytics Dashboard",
    description: "Designed an Attrition Rate Analysis module within an HR Analytics Dashboard using Power BI. Provided insights into employee turnover trends, key reasons for attrition, and retention patterns. Utilized DAX calculations to track attrition rates by department, tenure, and gender. Enabled HR teams to identify risks and implement targeted retention strategies.",
    skill: "python, numpy, pandas, power bi",
    category: "Analysis",
    date: "30 July, 2024",
    url: "http://www.project2.com",
    images: [
      "images/project6/a.png",
      "images/project6/b.png",
      "images/project6/c.png",
    ],
  },
  {
    title: "Portfolio website",
    description: "This fully responsive portfolio website showcases my skills with sections like About Me, Skills, Projects, and Contact. Built using HTML, CSS, and JavaScript, it adapts across all devices. The project enhanced my web development and responsive design skills.",
    skill: "html, css, js, git",
    category: "Web",
    date: "27 August, 2024",
    url: "https://portfolio-tb9s.onrender.com/",
    images: [
      "images/project7/a.png",
      "images/project7/b.png",
      "images/project7/c.png",
    ],
  },
  {
    title: "Analog Clock",
    description: "Created an analog clock using HTML, CSS, and JavaScript. Implemented dynamic hour, minute, and second hands with real-time updates for accurate time display.",
    skill: "html, css, js",
    category: "Web",
    date: "15 January, 2025",
    url: "http://www.project2.com",
    images: [
      "images/project8/a.png",
      "images/project8/b.png",
      "images/project8/c.png",
    ],
  },
  {
    title: "V Card",
    description: "Developed a responsive virtual business card using HTML, CSS, and JavaScript. Features dynamic contact details, social media links, and a sleek design for accessibility.",
    skill: "html, css",
    category: "Web",
    date: "17 January, 2025",
    url: "http://www.project2.com",
    images: [
      "images/project9/a.png",
      "images/project9/b.png",
      "images/project9/c.png",
    ],
  }
];

// Global State
let currentProjectIndex = -1;
let currentImageIndex = 0;
let autoSlideInterval;

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  
  projects.forEach((proj, idx) => {
    if (filter === 'all' || proj.category.toLowerCase() === filter.toLowerCase()) {
      const box = document.createElement('div');
      box.className = 'project-box show popEffect';
      box.dataset.category = proj.category.toLowerCase();
      
      const projectNumber = idx + 1;
      const showImageSrc = `images/project${projectNumber}/show.png`;
      const zoomImageSrc = `images/project${projectNumber}/zoom.png`;
      
      box.style.backgroundImage = `url('${showImageSrc}')`;
      
      box.innerHTML = `
        <div class="overlay">
          <div class="project-info">
            <h3>${proj.title}</h3>
            <p>${proj.category}</p>
            <div class="icons">
              <i class="fas fa-plus zoom-icon" data-zoom="${zoomImageSrc}"></i>
              <i class="fas fa-link details-icon" data-modal="${idx}"></i>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(box);
    }
  });

  // Re-attach listeners to dynamically generated elements
  document.querySelectorAll('.zoom-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      window.zoomImage(e.target.dataset.zoom);
    });
  });

  document.querySelectorAll('.details-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      window.openModal(parseInt(e.target.dataset.modal));
    });
  });
}

// App Initialization
window.addEventListener('load', () => {
  renderProjects('all');
});

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Smooth transition
    const gridChildren = document.getElementById('projectGrid').children;
    Array.from(gridChildren).forEach(child => {
      child.classList.remove('popEffect', 'show'); // Reset class
    });
    
    setTimeout(() => {
      renderProjects(e.target.dataset.filter);
    }, 150);
  });
});

// Modal Logic
window.openModal = function(index) {
  const project = projects[index];
  currentProjectIndex = index;
  currentImageIndex = 0;
  
  const modal = document.getElementById("projectModal");
  modal.style.display = "flex";

  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectDescription").textContent = project.description;
  document.getElementById("projectSkill").textContent = project.skill;
  document.getElementById("projectCategory").textContent = project.category;
  
  const projectClientEl = document.getElementById("projectClient");
  if (project.client) {
    projectClientEl.parentElement.style.display = "block";
    projectClientEl.textContent = project.client;
  } else {
    // Hide client section entirely if no client data
    projectClientEl.parentElement.style.display = "none";
  }
  
  document.getElementById("projectDate").textContent = project.date;

  const projectUrl = document.getElementById("projectUrl");
  projectUrl.textContent = "Visit";
  projectUrl.href = project.url;

  const images = project.images || [];
  const carouselBox = document.querySelector(".carousel-box");
  const carouselIndicators = document.querySelector(".carousel-indicators");
  
  carouselBox.innerHTML = '';
  carouselIndicators.innerHTML = '';
  
  images.forEach((imgSrc, idx) => {
    const imgEl = document.createElement("img");
    imgEl.src = imgSrc;
    imgEl.className = "carousel-image" + (idx === 0 ? " active" : "");
    imgEl.alt = "Project Image " + (idx + 1);
    
    // Instead of overriding CSS `opacity` directly via .style, rely on the .active CSS class
    // But setting it inline works well if CSS isn't fully using .active yet.
    imgEl.style.opacity = idx === 0 ? "1" : "0";
    
    carouselBox.appendChild(imgEl);
    
    const indEl = document.createElement("span");
    indEl.className = "indicator" + (idx === 0 ? " active" : "");
    indEl.addEventListener("click", () => window.showImage(idx));
    carouselIndicators.appendChild(indEl);
  });

  startAutoSlide();
};

window.closeModal = function() {
  document.getElementById("projectModal").style.display = "none";
  stopAutoSlide();
  currentProjectIndex = -1;
};

// Carousel Sliding Logic
function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => {
    if (currentProjectIndex !== -1) {
      const project = projects[currentProjectIndex];
      const images = project.images || [];
      if (images.length > 0) {
        let nxt = (currentImageIndex + 1) % images.length;
        window.showImage(nxt);
      }
    }
  }, 4000);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
}

window.showImage = function(index) {
  if (currentProjectIndex === -1) return;
  const project = projects[currentProjectIndex];
  const images = project.images || [];
  
  if (index >= images.length) return;
  
  const imageElements = document.querySelectorAll(".carousel-image");
  imageElements.forEach((img, idx) => {
    img.style.opacity = idx === index ? "1" : "0";
    if (idx === index) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
  
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((ind, idx) => {
    ind.classList.toggle("active", idx === index);
  });
  
  currentImageIndex = index;
  
  startAutoSlide(); // reset interval
};

/* --- Zoom functionality --- */
window.zoomImage = function(imageSrc) {
  const zoomedImage = document.getElementById("zoomedImage");
  const zoomOverlay = document.getElementById("zoomOverlay");
  const claa = document.getElementById("claa");

  zoomedImage.src = imageSrc;
  zoomOverlay.style.display = "flex";
  claa.style.display = "flex";
};

window.closeZoom = function() {
  document.getElementById("zoomOverlay").style.display = "none";
  document.getElementById("claa").style.display = "none";
};

document.getElementById("claa").addEventListener("click", function (event) {
  if (event.target.id === "claa" || event.target.id === "zoomOverlay") {
    window.closeZoom();
  }
});

document.getElementById("closeIcon").addEventListener("click", window.closeZoom);

document.getElementById("zoomedImage").addEventListener("click", function (event) {
  event.stopPropagation();
});
