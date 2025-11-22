// CivicGrid - Smart City Infrastructure Platform JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeCharts();
    initializeAnimations();
    initializeNavigation();
    initializeScrollEffects();
});

// Chart.js configurations and initializations
function initializeCharts() {
    // Traffic Congestion Chart (Hero Section)
    const trafficCtx = document.getElementById('trafficChart');
    if (trafficCtx) {
        new Chart(trafficCtx, {
            type: 'line',
            data: {
                labels: ['6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
                datasets: [{
                    label: 'Before CivicGrid',
                    data: [85, 95, 75, 65, 70, 90, 100, 80],
                    borderColor: '#FB8C00',
                    backgroundColor: 'rgba(251, 140, 0, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }, {
                    label: 'After CivicGrid',
                    data: [60, 70, 55, 45, 50, 65, 75, 55],
                    borderColor: '#43A047',
                    backgroundColor: 'rgba(67, 160, 71, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Traffic Congestion Reduction',
                        color: '#FFFFFF',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        labels: {
                            color: '#FFFFFF',
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        ticks: {
                            color: '#FFFFFF'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        ticks: {
                            color: '#FFFFFF',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    // Impact Metrics Chart (Case Study Section)
    const impactCtx = document.getElementById('impactChart');
    if (impactCtx) {
        new Chart(impactCtx, {
            type: 'bar',
            data: {
                labels: ['Commute Time', 'Traffic Costs', 'Emergency Response', 'Waste Efficiency'],
                datasets: [{
                    label: 'Before Implementation',
                    data: [45, 2.4, 8.5, 65],
                    backgroundColor: '#FB8C00',
                    borderColor: '#E65100',
                    borderWidth: 2,
                    borderRadius: 8
                }, {
                    label: 'After Implementation',
                    data: [28, 1.2, 5.2, 89],
                    backgroundColor: '#43A047',
                    borderColor: '#2E7D32',
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Singapore Smart Nation Initiative - Impact Metrics',
                        color: '#005B96',
                        font: {
                            size: 18,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        labels: {
                            color: '#005B96',
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(0, 91, 150, 0.1)'
                        },
                        ticks: {
                            color: '#005B96',
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(0, 91, 150, 0.1)'
                        },
                        ticks: {
                            color: '#005B96',
                            font: {
                                size: 12
                            },
                            callback: function(value, index, ticks) {
                                if (index === 0) return 'Minutes';
                                if (index === 1) return 'Billion $';
                                if (index === 2) return 'Minutes';
                                if (index === 3) return 'Efficiency %';
                                return value;
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }
}

// Animation and scroll effects
function initializeAnimations() {
    // Add fade-in animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('.module-card, .security-card, .case-study-content, .impact-metrics');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Navigation functionality
function initializeNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });
}

// Scroll effects and parallax
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Counter animation for statistics
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Counter animation function
function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '');
    }, 16);
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function downloadWhitepaper() {
    // Simulate whitepaper download
    const button = event.target;
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Downloading...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check me-2"></i>Downloaded!';
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    }, 2000);
    
    // In a real implementation, this would trigger an actual download
    console.log('Whitepaper download initiated');
}

// Add active class to navigation items
const style = document.createElement('style');
style.textContent = `
    .navbar-nav .nav-link.active {
        color: #43A047 !important;
        font-weight: 600;
    }
    
    .navbar-nav .nav-link.active::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: #43A047;
        margin-top: 2px;
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #005B96;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'CivicGrid';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 2rem;
        font-weight: bold;
        z-index: 10000;
        animation: pulse 1.5s infinite;
    }
`;
document.head.appendChild(loadingStyle);
