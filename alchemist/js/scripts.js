
/**
 * ===================================================================
 * THE ALCHEMIST V1 - MAXIMUM SEO POWER JAVASCRIPT
 * Advanced features with performance optimization for Google standards
 * ===================================================================
 */

(function() {
    'use strict';

    // ===================================================================
    // PERFORMANCE-OPTIMIZED CONFIGURATION
    // ===================================================================
    
    const AlchemistTheme = {
        config: {
            breakingNewsUrl: '/feeds/posts/default?alt=json&max-results=10',
            tocMinHeadings: 2,
            lazyLoadOffset: 100,
            scrollThrottle: 16,
            searchSuggestionsCount: 5,
            readingWordsPerMinute: 200,
            performanceMetrics: true,
            maxImageSize: 800, // KB
            cacheExpiry: 24 * 60 * 60 * 1000, // 24 hours
            analyticsEnabled: true
        },
        
        cache: new Map(),
        observers: new Map(),
        
        init: function() {
            this.domReady(() => {
                this.initializeCriticalFeatures();
                this.initializeAdvancedSEOFeatures();
                this.initializePerformanceOptimizations();
                this.initializePWAFeatures();
                this.initializeContentIntelligence();
                console.log('🔮 The Alchemist V1 - Maximum SEO Power Activated!');
            });
        },
        
        domReady: function(callback) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', callback);
            } else {
                callback();
            }
        }
    };

    // ===================================================================
    // AUTOMATIC PARAGRAPH FIXER (ENHANCED TRANSMUTATION SCRIPT)
    // ===================================================================
    
    AlchemistTheme.paragraphFixer = {
        init: function() {
            this.fixOldPosts();
            this.observeNewContent();
            this.enhanceReadability();
        },
        
        fixOldPosts: function() {
            console.log('🔮 Enhanced Transmutation Script: Converting content structure...');
            
            const postBodies = document.querySelectorAll('.post-body, .post-content');
            
            postBodies.forEach(postBody => {
                this.transmuteBrToParagraphs(postBody);
                this.optimizeContentStructure(postBody);
            });
            
            console.log('✨ Transmutation Complete: Content optimized for SEO');
        },
        
        transmuteBrToParagraphs: function(container) {
            if (container.classList.contains('transmuted')) return;
            
            // Advanced content parsing
            const content = container.innerHTML;
            
            // Split by double BR tags (paragraph breaks)
            const paragraphs = content.split(/<br\s*\/?>\s*<br\s*\/?>/gi);
            
            if (paragraphs.length > 1) {
                const newHTML = paragraphs
                    .map(p => {
                        // Clean up single BR tags within paragraphs
                        const cleaned = p.replace(/<br\s*\/?>/gi, ' ').trim();
                        return cleaned && !cleaned.startsWith('<p') ? `<p>${cleaned}</p>` : cleaned;
                    })
                    .filter(p => p.trim())
                    .join('\n');
                
                if (newHTML) {
                    container.innerHTML = newHTML;
                    container.classList.add('transmuted');
                }
            }
        },
        
        optimizeContentStructure: function(container) {
            // Ensure proper heading hierarchy
            const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
            let lastLevel = 1;
            
            headings.forEach(heading => {
                const currentLevel = parseInt(heading.tagName.charAt(1));
                
                // Skip if heading is too far from last level
                if (currentLevel > lastLevel + 1) {
                    const newLevel = Math.min(lastLevel + 1, 6);
                    const newHeading = document.createElement(`h${newLevel}`);
                    newHeading.innerHTML = heading.innerHTML;
                    newHeading.className = heading.className;
                    heading.parentNode.replaceChild(newHeading, heading);
                    lastLevel = newLevel;
                } else {
                    lastLevel = currentLevel;
                }
            });
        },
        
        enhanceReadability: function() {
            // Add reading progress indicators
            document.querySelectorAll('.post-body p').forEach((p, index) => {
                if (p.textContent.length > 200) {
                    p.setAttribute('data-paragraph', index + 1);
                }
            });
        },
        
        observeNewContent: function() {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const postBodies = node.querySelectorAll ? 
                                node.querySelectorAll('.post-body, .post-content') : [];
                            
                            postBodies.forEach(postBody => {
                                if (!postBody.classList.contains('transmuted')) {
                                    this.transmuteBrToParagraphs(postBody);
                                    this.optimizeContentStructure(postBody);
                                }
                            });
                        }
                    });
                });
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            AlchemistTheme.observers.set('contentMutation', observer);
        }
    };

    // ===================================================================
    // AUTO TABLE OF CONTENTS WITH SEO OPTIMIZATION
    // ===================================================================
    
    AlchemistTheme.tableOfContents = {
        init: function() {
            if (document.querySelector('.post-single')) {
                this.generateTOC();
                this.initScrollSpy();
                this.optimizeForSEO();
            }
        },
        
        generateTOC: function() {
            const headings = document.querySelectorAll('.post-body h2, .post-body h3');
            
            if (headings.length < AlchemistTheme.config.tocMinHeadings) {
                return;
            }
            
            const tocContainer = document.getElementById('tableOfContents');
            const tocList = document.getElementById('tocList');
            
            if (!tocContainer || !tocList) return;
            
            console.log('📖 Generating SEO-optimized Table of Contents...');
            
            let tocHTML = '';
            const tocData = [];
            
            headings.forEach((heading, index) => {
                const headingId = this.generateHeadingId(heading, index);
                heading.id = headingId;
                heading.setAttribute('data-toc-index', index);
                
                const level = heading.tagName.toLowerCase();
                const text = heading.textContent.trim();
                const className = level === 'h3' ? 'toc-h3' : '';
                
                tocHTML += `<li class="${className}">
                    <a href="#${headingId}" data-heading-id="${headingId}">${text}</a>
                </li>`;
                
                tocData.push({
                    id: headingId,
                    text: text,
                    level: level
                });
            });
            
            tocList.innerHTML = tocHTML;
            tocContainer.style.display = 'block';
            
            // Add click handlers with analytics
            tocList.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', (e) => {
                    this.handleTOCClick(e);
                    this.trackTOCUsage(e.target.textContent);
                });
            });
            
            // Store TOC data for schema generation
            AlchemistTheme.cache.set('tocData', tocData);
            
            console.log('✅ SEO-optimized Table of Contents generated');
        },
        
        generateHeadingId: function(heading, index) {
            let id = heading.textContent
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .substring(0, 50);
            
            if (!id) {
                id = `heading-${index}`;
            }
            
            // Ensure uniqueness
            const existingElement = document.getElementById(id);
            if (existingElement && existingElement !== heading) {
                id += `-${index}`;
            }
            
            return id;
        },
        
        handleTOCClick: function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.site-header').offsetHeight + 20;
                const elementPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
                
                // Update URL for better SEO
                history.replaceState(null, null, `#${targetId}`);
                
                // Focus for accessibility
                targetElement.tabIndex = -1;
                targetElement.focus();
            }
        },
        
        initScrollSpy: function() {
            const headings = document.querySelectorAll('.post-body h2, .post-body h3');
            const tocLinks = document.querySelectorAll('#tocList a');
            
            if (headings.length === 0 || tocLinks.length === 0) return;
            
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const headingId = entry.target.id;
                        
                        // Remove active class from all TOC links
                        tocLinks.forEach(link => link.classList.remove('active'));
                        
                        // Add active class to current link
                        const activeLink = document.querySelector(`#tocList a[data-heading-id="${headingId}"]`);
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    }
                });
            }, {
                rootMargin: '-20% 0px -80% 0px'
            });
            
            headings.forEach(heading => observer.observe(heading));
            AlchemistTheme.observers.set('tocScrollSpy', observer);
        },
        
        optimizeForSEO: function() {
            // Generate schema markup for HowTo content
            const tocData = AlchemistTheme.cache.get('tocData');
            if (tocData && tocData.length >= 3) {
                this.generateHowToSchema(tocData);
            }
        },
        
        generateHowToSchema: function(tocData) {
            const steps = tocData.map((item, index) => ({
                "@type": "HowToStep",
                "name": item.text,
                "position": index + 1,
                "url": `${window.location.origin}${window.location.pathname}#${item.id}`
            }));
            
            const howToSchema = {
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": document.title,
                "description": document.querySelector('meta[name="description"]')?.content || '',
                "step": steps
            };
            
            AlchemistTheme.schemaGenerator.insertSchema(howToSchema, 'howto-schema');
        },
        
        trackTOCUsage: function(headingText) {
            if (AlchemistTheme.config.analyticsEnabled && typeof gtag !== 'undefined') {
                gtag('event', 'toc_click', {
                    'event_category': 'User Engagement',
                    'event_label': headingText,
                    'value': 1
                });
            }
        }
    };

    // ===================================================================
    // ENHANCED BREAKING NEWS TICKER
    // ===================================================================
    
    AlchemistTheme.breakingNews = {
        init: function() {
            this.loadBreakingNews();
            this.setupAutoRefresh();
        },
        
        loadBreakingNews: function() {
            console.log('📰 Loading breaking news with caching...');
            
            const cached = this.getCachedNews();
            if (cached) {
                this.displayNews(cached);
                return;
            }
            
            // Create a script element to load JSON feed
            const script = document.createElement('script');
            script.src = AlchemistTheme.config.breakingNewsUrl + '&callback=AlchemistTheme.breakingNews.handleNewsData';
            document.head.appendChild(script);
            
            // Cleanup script after loading
            script.onload = () => {
                document.head.removeChild(script);
            };
            
            script.onerror = () => {
                console.warn('Failed to load breaking news');
                this.displayFallbackNews();
                document.head.removeChild(script);
            };
        },
        
        handleNewsData: function(data) {
            if (!data.feed || !data.feed.entry) return;
            
            const entries = data.feed.entry.slice(0, 5); // Latest 5 posts
            const newsData = entries.map(entry => ({
                title: entry.title.$t,
                link: entry.link.find(l => l.rel === 'alternate').href,
                timestamp: Date.now()
            }));
            
            // Cache the news data
            this.setCachedNews(newsData);
            this.displayNews(newsData);
            
            console.log('✅ Breaking news loaded and cached');
        },
        
        displayNews: function(newsData) {
            const breakingContainer = document.getElementById('breakingScroll');
            if (!breakingContainer) return;
            
            const newsHTML = newsData
                .map(news => `<a href="${news.link}" title="${news.title}">${news.title}</a>`)
                .join('');
            
            breakingContainer.innerHTML = newsHTML;
        },
        
        displayFallbackNews: function() {
            const breakingContainer = document.getElementById('breakingScroll');
            if (breakingContainer) {
                breakingContainer.innerHTML = '<a href="#">Welcome to our enhanced blog experience! 🚀</a>';
            }
        },
        
        getCachedNews: function() {
            try {
                const cached = localStorage.getItem('breakingNews');
                if (cached) {
                    const data = JSON.parse(cached);
                    if (Date.now() - data.timestamp < AlchemistTheme.config.cacheExpiry) {
                        return data.news;
                    }
                }
            } catch (e) {
                console.warn('Failed to get cached news:', e);
            }
            return null;
        },
        
        setCachedNews: function(newsData) {
            try {
                localStorage.setItem('breakingNews', JSON.stringify({
                    news: newsData,
                    timestamp: Date.now()
                }));
            } catch (e) {
                console.warn('Failed to cache news:', e);
            }
        },
        
        setupAutoRefresh: function() {
            // Refresh news every 30 minutes
            setInterval(() => {
                this.loadBreakingNews();
            }, 30 * 60 * 1000);
        }
    };

    // ===================================================================
    // ADVANCED SOCIAL SHARING WITH ANALYTICS
    // ===================================================================
    
    AlchemistTheme.socialSharing = {
        init: function() {
            window.sharePost = this.sharePost.bind(this);
            window.copyUrl = this.copyUrl.bind(this);
            this.initNativeSharing();
        },
        
        initNativeSharing: function() {
            // Check if Web Share API is available
            if (navigator.share) {
                const shareButtons = document.querySelector('.share-buttons');
                if (shareButtons) {
                    const nativeButton = document.createElement('button');
                    nativeButton.className = 'share-btn native';
                    nativeButton.textContent = 'Share';
                    nativeButton.onclick = this.nativeShare.bind(this);
                    shareButtons.appendChild(nativeButton);
                }
            }
        },
        
        nativeShare: function() {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href,
                    text: document.querySelector('meta[name="description"]')?.content || ''
                }).then(() => {
                    this.trackShare('native');
                }).catch(err => {
                    console.warn('Native share failed:', err);
                });
            }
        },
        
        sharePost: function(platform) {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            const description = encodeURIComponent(
                document.querySelector('meta[name="description"]')?.content || ''
            );
            
            let shareUrl = '';
            
            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${title}%20${url}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
                this.trackShare(platform);
            }
        },
        
        copyUrl: function() {
            const url = window.location.href;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(url).then(() => {
                    this.showCopySuccess();
                    this.trackShare('copy');
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showCopySuccess();
                this.trackShare('copy');
            }
        },
        
        showCopySuccess: function() {
            const button = document.querySelector('.share-btn.copy');
            if (button) {
                const originalText = button.textContent;
                button.textContent = 'Copied! ✓';
                button.style.background = '#27ae60';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 2000);
            }
        },
        
        trackShare: function(platform) {
            if (AlchemistTheme.config.analyticsEnabled && typeof gtag !== 'undefined') {
                gtag('event', 'share', {
                    'method': platform,
                    'content_type': 'article',
                    'content_id': window.location.pathname
                });
            }
        }
    };

    // ===================================================================
    // AI-POWERED LAZY LOADING WITH OPTIMIZATION
    // ===================================================================
    
    AlchemistTheme.lazyLoading = {
        init: function() {
            this.initIntersectionObserver();
            this.preloadCriticalImages();
            this.optimizeImageLoading();
        },
        
        initIntersectionObserver: function() {
            if (!('IntersectionObserver' in window)) {
                this.fallbackLoading();
                return;
            }
            
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: `${AlchemistTheme.config.lazyLoadOffset}px`
            });
            
            // Observe all images with data-src
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
            
            // Observe dynamically added images
            const mutationObserver = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const lazyImages = node.querySelectorAll ? 
                                node.querySelectorAll('img[data-src]') : [];
                            lazyImages.forEach(img => imageObserver.observe(img));
                        }
                    });
                });
            });
            
            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            AlchemistTheme.observers.set('imageLoading', imageObserver);
            AlchemistTheme.observers.set('imageMutation', mutationObserver);
        },
        
        loadImage: function(img) {
            const src = img.getAttribute('data-src');
            if (!src) return;
            
            // Create a new image to test loading
            const testImg = new Image();
            
            testImg.onload = () => {
                img.src = src;
                img.classList.add('lazyloaded');
                img.removeAttribute('data-src');
                
                // Generate alt text if missing
                if (!img.alt) {
                    this.generateAltText(img);
                }
                
                // Track image performance
                this.trackImageLoad(src, testImg.naturalWidth, testImg.naturalHeight);
            };
            
            testImg.onerror = () => {
                img.classList.add('error');
                console.warn('Failed to load image:', src);
                this.handleImageError(img);
            };
            
            testImg.src = src;
        },
        
        generateAltText: function(img) {
            // Simple alt text generation based on image source and context
            const src = img.src;
            const filename = src.split('/').pop().split('.')[0];
            const context = img.closest('.post-title')?.textContent || 
                           img.closest('article')?.querySelector('.post-title')?.textContent || 
                           document.title;
            
            let altText = filename.replace(/[-_]/g, ' ');
            if (context) {
                altText = `${altText} - ${context}`;
            }
            
            img.alt = altText.substring(0, 100); // Limit to 100 characters
        },
        
        handleImageError: function(img) {
            // Replace with placeholder or hide
            img.style.display = 'none';
            
            // Create placeholder if in post content
            if (img.closest('.post-body')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.textContent = '📷 Image not available';
                img.parentNode.insertBefore(placeholder, img);
            }
        },
        
        preloadCriticalImages: function() {
            const criticalImages = document.querySelectorAll('img[data-priority="high"], .post-thumbnail');
            criticalImages.forEach(img => {
                if (img.getAttribute('data-src')) {
                    this.loadImage(img);
                }
            });
        },
        
        optimizeImageLoading: function() {
            // Convert regular images to lazy loading
            document.querySelectorAll('img:not([data-src]):not([src*="data:"])').forEach(img => {
                if (!img.complete) {
                    const src = img.src;
                    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
                    img.setAttribute('data-src', src);
                    img.classList.add('lazyload');
                }
            });
        },
        
        trackImageLoad: function(src, width, height) {
            if (AlchemistTheme.config.analyticsEnabled && typeof gtag !== 'undefined') {
                gtag('event', 'image_load', {
                    'event_category': 'Performance',
                    'event_label': src.split('/').pop(),
                    'custom_map': {
                        'dimension1': `${width}x${height}`
                    }
                });
            }
        },
        
        fallbackLoading: function() {
            document.querySelectorAll('img[data-src]').forEach(img => {
                this.loadImage(img);
            });
        }
    };

    // ===================================================================
    // ADVANCED READING PROGRESS WITH ANALYTICS
    // ===================================================================
    
    AlchemistTheme.readingProgress = {
        init: function() {
            if (!document.querySelector('.post-single')) return;
            
            this.createProgressBar();
            this.updateProgress();
            this.calculateReadingTime();
            this.trackReadingBehavior();
        },
        
        createProgressBar: function() {
            const progressBar = document.createElement('div');
            progressBar.className = 'reading-progress';
            progressBar.id = 'readingProgress';
            document.body.appendChild(progressBar);
        },
        
        updateProgress: function() {
            const progressBar = document.getElementById('readingProgress');
            if (!progressBar) return;
            
            let lastScrollPercent = 0;
            
            const updateScroll = () => {
                const article = document.querySelector('.post-body') || document.querySelector('.post-content');
                if (!article) return;
                
                const articleTop = article.offsetTop;
                const articleHeight = article.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollTop = window.pageYOffset;
                
                const articleBottom = articleTop + articleHeight - windowHeight;
                const scrollPercent = ((scrollTop - articleTop) / (articleBottom - articleTop)) * 100;
                
                const clampedPercent = Math.max(0, Math.min(100, scrollPercent));
                progressBar.style.width = `${clampedPercent}%`;
                
                // Track milestone progress
                const milestones = [25, 50, 75, 100];
                milestones.forEach(milestone => {
                    if (lastScrollPercent < milestone && clampedPercent >= milestone) {
                        this.trackReadingMilestone(milestone);
                    }
                });
                
                lastScrollPercent = clampedPercent;
            };
            
            window.addEventListener('scroll', this.throttle(updateScroll, AlchemistTheme.config.scrollThrottle));
            updateScroll();
        },
        
        calculateReadingTime: function() {
            const article = document.querySelector('.post-body');
            if (!article) return;
            
            const text = article.textContent || '';
            const wordCount = text.split(/\s+/).length;
            const readingTime = Math.ceil(wordCount / AlchemistTheme.config.readingWordsPerMinute);
            
            // Display reading time
            const readingTimeDisplay = document.getElementById('readingTimeDisplay');
            if (readingTimeDisplay) {
                readingTimeDisplay.textContent = `${readingTime} min read`;
                readingTimeDisplay.className = 'reading-time';
            }
            
            // Store for analytics
            AlchemistTheme.cache.set('estimatedReadingTime', readingTime);
            AlchemistTheme.cache.set('wordCount', wordCount);
        },
        
        trackReadingBehavior: function() {
            let startTime = Date.now();
            let maxScrollDepth = 0;
            let isActiveReading = true;
            
            // Track time on page
            const trackTimeOnPage = () => {
                if (isActiveReading) {
                    const timeSpent = Math.round((Date.now() - startTime) / 1000);
                    
                    if (AlchemistTheme.config.analyticsEnabled && typeof gtag !== 'undefined') {
                        gtag('event', 'page_view_time', {
                            'event_category': 'Engagement',
                            'value': timeSpent,
                            'custom_map': {
                                'dimension2': maxScrollDepth
                            }
                        });
                    }
                }
            };
            
            // Track when user becomes inactive
            let inactivityTimer;
            const resetInactivityTimer = () => {
                clearTimeout(inactivityTimer);
                isActiveReading = true;
                inactivityTimer = setTimeout(() => {
                    isActiveReading = false;
                }, 30000); // 30 seconds of inactivity
            };
            
            ['scroll', 'mousemove', 'keydown'].forEach(event => {
                window.addEventListener(event, resetInactivityTimer);
            });
            
            // Track scroll depth
            window.addEventListener('scroll', this.throttle(() => {
                const scrollDepth = Math.round((window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100);
                maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
            }, 1000));
            
            // Send data before page unload
            window.addEventListener('beforeunload', trackTimeOnPage);
            
            // Send periodic updates
            setInterval(trackTimeOnPage, 30000); // Every 30 seconds
        },
        
        trackReadingMilestone: function(milestone) {
            if (AlchemistTheme.config.analyticsEnabled && typeof gtag !== 'undefined') {
                gtag('event', 'reading_progress', {
                    'event_category': 'Engagement',
                    'event_label': `${milestone}%`,
                    'value': milestone
                });
            }
        },
        
        throttle: function(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    };

    // ===================================================================
    // SENTIENT SCHEMA ENGINE (ENHANCED AI DETECTION)
    // ===================================================================
    
    AlchemistTheme.schemaGenerator = {
        init: function() {
            this.detectAndGenerateSchemas();
            this.generateBreadcrumbSchema();
            this.generateAuthorSchema();
        },
        
        detectAndGenerateSchemas: function() {
            console.log('🧠 Sentient Schema Engine: Advanced content analysis...');
            
            this.detectFAQContent();
            this.detectHowToContent();
            this.detectVideoContent();
            this.detectRecipeContent();
            this.detectReviewContent();
            this.detectNewsArticle();
            this.detectProductContent();
        },
        
        detectFAQContent: function() {
            const article = document.querySelector('.post-body');
            if (!article) return;
            
            // Enhanced FAQ pattern detection
            const faqPatterns = [
                /(?:Q:|Question\s*\d*:?|^\d+\.)\s*(.+?)\s*(?:A:|Answer:?)\s*(.+?)(?=(?:Q:|Question\s*\d*:?|^\d+\.)|$)/gim,
                /(?:What|How|When|Where|Why|Who)\s+(.+?)\?\s*(.+?)(?=(?:What|How|When|Where|Why|Who)|$)/gim
            ];
            
            let allMatches = [];
            
            faqPatterns.forEach(pattern => {
                const matches = [...article.textContent.matchAll(pattern)];
                allMatches = allMatches.concat(matches);
            });
            
            if (allMatches.length >= 2) {
                console.log('📋 FAQ content detected, generating enhanced FAQPage schema...');
                
                const faqSchema = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": allMatches.slice(0, 10).map(match => ({
                        "@type": "Question",
                        "name": match[1].trim(),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": match[2].trim().substring(0, 500)
                        }
                    }))
                };
                
                this.insertSchema(faqSchema, 'faq-schema');
            }
        },
        
        detectVideoContent: function() {
            const videos = document.querySelectorAll('iframe[src*="youtube"], iframe[src*="vimeo"], video');
            
            videos.forEach((video, index) => {
                let videoUrl = '';
                let embedUrl = '';
                let thumbnailUrl = '';
                
                if (video.tagName === 'IFRAME') {
                    embedUrl = video.src;
                    if (video.src.includes('youtube')) {
                        const videoId = video.src.match(/(?:embed\/|v=)([^&\n?#]+)/)?.[1];
                        if (videoId) {
                            videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                            thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                        }
                    }
                } else if (video.tagName === 'VIDEO') {
                    videoUrl = video.src || video.querySelector('source')?.src;
                }
                
                if (videoUrl) {
                    console.log('🎥 Video content detected, generating enhanced VideoObject schema...');
                    
                    const videoSchema = {
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": document.title,
                        "description": this.getMetaDescription(),
                        "contentUrl": videoUrl,
                        "embedUrl": embedUrl || videoUrl,
                        "thumbnailUrl": thumbnailUrl,
                        "uploadDate": this.getPublishDate(),
                        "duration": this.estimateVideoDuration(video),
                        "publisher": {
                            "@type": "Organization",
                            "name": document.querySelector('meta[property="og:site_name"]')?.content || "Bukit Besi Blog"
                        }
                    };
                    
                    this.insertSchema(videoSchema, `video-schema-${index}`);
                }
            });
        },
        
        detectNewsArticle: function() {
            const article = document.querySelector('.post-body');
            const publishDate = document.querySelector('time[datetime]')?.getAttribute('datetime');
            
            if (article && publishDate) {
                const publishDateTime = new Date(publishDate);
                const now = new Date();
                const daysDiff = (now - publishDateTime) / (1000 * 60 * 60 * 24);
                
                // If published within last 7 days, treat as news article
                if (daysDiff <= 7) {
                    console.log('📰 News article detected, generating NewsArticle schema...');
                    
                    const newsSchema = {
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": document.title,
                        "description": this.getMetaDescription(),
                        "author": {
                            "@type": "Person",
                            "name": this.getAuthorName()
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": document.querySelector('meta[property="og:site_name"]')?.content || "Bukit Besi Blog",
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${window.location.origin}/logo.png`
                            }
                        },
                        "datePublished": publishDate,
                        "dateModified": this.getModifiedDate() || publishDate,
                        "image": this.getFeaturedImage(),
                        "url": window.location.href
                    };
                    
                    this.insertSchema(newsSchema, 'news-article-schema');
                }
            }
        },
        
        detectProductContent: function() {
            const article = document.querySelector('.post-body');
            if (!article) return;
            
            const productKeywords = ['review', 'price', 'buy', 'product', 'rating', 'specifications'];
            const content = article.textContent.toLowerCase();
            
            const hasProductKeywords = productKeywords.filter(keyword => content.includes(keyword)).length >= 3;
            
            if (hasProductKeywords) {
                console.log('🛍️ Product content detected, generating Product schema...');
                
                const productSchema = {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": document.title,
                    "description": this.getMetaDescription(),
                    "image": this.getFeaturedImage(),
                    "brand": {
                        "@type": "Brand",
                        "name": this.extractBrandName(content)
                    },
                    "review": {
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": this.getAuthorName()
                        },
                        "datePublished": this.getPublishDate(),
                        "reviewBody": this.getMetaDescription()
                    }
                };
                
                this.insertSchema(productSchema, 'product-schema');
            }
        },
        
        generateBreadcrumbSchema: function() {
            const breadcrumbs = document.querySelector('.breadcrumbs');
            if (!breadcrumbs) return;
            
            const links = breadcrumbs.querySelectorAll('a');
            if (links.length === 0) return;
            
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": []
            };
            
            links.forEach((link, index) => {
                breadcrumbSchema.itemListElement.push({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": link.textContent.trim(),
                    "item": link.href
                });
            });
            
            this.insertSchema(breadcrumbSchema, 'breadcrumb-schema');
        },
        
        generateAuthorSchema: function() {
            const authorName = this.getAuthorName();
            if (!authorName) return;
            
            const authorSchema = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": authorName,
                "url": this.getAuthorUrl(),
                "sameAs": [
                    "https://www.facebook.com/BukitBesi/",
                    "https://www.twitter.com/BukitBesiBlog"
                ]
            };
            
            this.insertSchema(authorSchema, 'author-schema');
        },
        
        // Helper methods
        getMetaDescription: function() {
            return document.querySelector('meta[name="description"]')?.content || '';
        },
        
        getAuthorName: function() {
            return document.querySelector('[itemprop="author"] [itemprop="name"]')?.textContent || 
                   document.querySelector('meta[name="author"]')?.content || 
                   'Bukit Besi Blog';
        },
        
        getAuthorUrl: function() {
            return document.querySelector('[itemprop="author"]')?.href || 
                   window.location.origin;
        },
        
        getPublishDate: function() {
            const dateElement = document.querySelector('[itemprop="datePublished"]');
            return dateElement?.getAttribute('datetime') || 
                   dateElement?.textContent || 
                   new Date().toISOString();
        },
        
        getModifiedDate: function() {
            const dateElement = document.querySelector('[itemprop="dateModified"]');
            return dateElement?.getAttribute('datetime') || null;
        },
        
        getFeaturedImage: function() {
            return document.querySelector('meta[property="og:image"]')?.content ||
                   document.querySelector('.post-thumbnail')?.src ||
                   `${window.location.origin}/default-image.jpg`;
        },
        
        extractBrandName: function(content) {
            // Simple brand extraction logic
            const brandKeywords = ['apple', 'samsung', 'google', 'microsoft', 'sony'];
            const foundBrand = brandKeywords.find(brand => content.includes(brand));
            return foundBrand ? foundBrand.charAt(0).toUpperCase() + foundBrand.slice(1) : 'Unknown';
        },
        
        estimateVideoDuration: function(video) {
            // Try to get duration if available
            if (video.duration) {
                return `PT${Math.round(video.duration)}S`;
            }
            // Default estimate
            return 'PT5M'; // 5 minutes default
        },
        
        insertSchema: function(schema, id) {
            const existingSchema = document.getElementById(id);
            if (existingSchema) {
                existingSchema.remove();
            }
            
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = id;
            script.textContent = JSON.stringify(schema, null, 2);
            document.head.appendChild(script);
            
            console.log(`✅ Schema generated: ${schema['@type']}`);
        }
    };

    // ===================================================================
    // PWA FEATURES
    // ===================================================================
    
    AlchemistTheme.pwaFeatures = {
        init: function() {
            this.handleInstallPrompt();
            this.setupOfflineSupport();
            this.initializeNotifications();
        },
        
        handleInstallPrompt: function() {
            let deferredPrompt;
            
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                
                // Show custom install button
                this.showInstallButton(deferredPrompt);
            });
            
            window.addEventListener('appinstalled', () => {
                console.log('📱 PWA installed successfully');
                this.trackPWAInstall();
            });
        },
        
        showInstallButton: function(deferredPrompt) {
            const installButton = document.createElement('button');
            installButton.className = 'pwa-install-btn';
            installButton.textContent = '📱 Install App';
            installButton.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: #0984e3;
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 25px;
                cursor: pointer;
                z-index: 1000;
                font-size: 14px;
                box-shadow: 0 4px 15px rgba(9, 132, 227, 0.3);
            `;
            
            installButton.addEventListener('click', async () => {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                
                if (outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                }
                
                deferredPrompt = null;
                installButton.remove();
            });
            
            document.body.appendChild(installButton);
            
            // Auto-hide after 10 seconds
            setTimeout(() => {
                if (installButton.parentNode) {
                    installButton.remove();
                }
            }, 10000);
        },
        
        setupOfflineSupport: function() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(registration => {
                    console.log('🔧 Service Worker ready');
                    
                    // Listen for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                this.showUpdateAvailable();
                            }
                        });
                    });
                });
            }
        },
        
        showUpdateAvailable: function() {
            const updateBanner = document.createElement('div');
            updateBanner.className = 'update-banner';
            updateBanner.innerHTML = `
                <div style="background: #2c3e50; color: white; padding: 15px; text-align: center; position: fixed; top: 0; left: 0; right: 0; z-index: 1001;">
                    <span>🔄 New version available! </span>
                    <button onclick="window.location.reload()" style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 3px; margin-left: 10px;">Update</button>
                    <button onclick="this.parentElement.remove()" style="background: transparent; color: white; border: 1px solid white; padding: 5px 10px; border-radius: 3px; margin-left: 5px;">Later</button>
                </div>
            `;
            
            document.body.appendChild(updateBanner);
        },
        
        initializeNotifications: function() {
            if ('Notification' in window && 'serviceWorker' in navigator) {
                // Request permission after user interaction
                document.addEventListener('click', this.requestNotificationPermission, { once: true });
            }
        },
        
        requestNotificationPermission: function() {
            if (Notification.permission === 'default') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        console.log('🔔 Notification permission granted');
                    }
                });
            }
        },
        
        trackPWAInstall: function() {
            if (AlchemistTheme.config.analyticsEnabled && typeof gtag !== 'undefined') {
                gtag('event', 'pwa_install', {
                    'event_category': 'PWA',
                    'event_label': 'App Installed'
                });
            }
        }
    };

    // ===================================================================
    // CONTENT INTELLIGENCE & AUTO OPTIMIZATION
    // ===================================================================
    
    AlchemistTheme.contentIntelligence = {
        init: function() {
            this.analyzeContent();
            this.generateInternalLinks();
            this.optimizeImages();
            this.detectContentGaps();
        },
        
        analyzeContent: function() {
            const article = document.querySelector('.post-body');
            if (!article) return;
            
            const text = article.textContent;
            const wordCount = text.split(/\s+/).length;
            const readabilityScore = this.calculateReadabilityScore(text);
            
            console.log(`📊 Content Analysis:
                - Word count: ${wordCount}
                - Readability score: ${readabilityScore}
                - Estimated reading time: ${Math.ceil(wordCount / 200)} minutes`);
            
            // Store analysis results
            AlchemistTheme.cache.set('contentAnalysis', {
                wordCount,
                readabilityScore,
                analyzedAt: Date.now()
            });
        },
        
        calculateReadabilityScore: function(text) {
            // Simplified Flesch Reading Ease calculation
            const sentences = text.split(/[.!?]+/).length;
            const words = text.split(/\s+/).length;
            const syllables = this.countSyllables(text);
            
            const score = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words));
            return Math.max(0, Math.min(100, Math.round(score)));
        },
        
        countSyllables: function(text) {
            // Simple syllable counting
            return text.toLowerCase()
                .replace(/[^a-z]/g, '')
                .replace(/[aeiou]{2,}/g, 'a')
                .replace(/[^aeiou]/g, '')
                .length || 1;
        },
        
        generateInternalLinks: function() {
            const article = document.querySelector('.post-body');
            if (!article) return;
            
            // Get all post titles from the page for potential internal links
            const potentialLinks = Array.from(document.querySelectorAll('.post-title a')).map(link => ({
                title: link.textContent.trim(),
                url: link.href
            }));
            
            if (potentialLinks.length === 0) return;
            
            // Find potential internal linking opportunities
            const text = article.textContent.toLowerCase();
            const linkSuggestions = [];
            
            potentialLinks.forEach(link => {
                const keywords = link.title.toLowerCase().split(/\s+/).filter(word => word.length > 3);
                keywords.forEach(keyword => {
                    if (text.includes(keyword) && !article.querySelector(`a[href="${link.url}"]`)) {
                        linkSuggestions.push({
                            keyword,
                            title: link.title,
                            url: link.url
                        });
                    }
                });
            });
            
            console.log('🔗 Internal link suggestions:', linkSuggestions.slice(0, 3));
        },
        
        optimizeImages: function() {
            const images = document.querySelectorAll('.post-body img');
            
            images.forEach(img => {
                // Check if image has alt text
                if (!img.alt) {
                    console.warn('⚠️ Image missing alt text:', img.src);
                }
                
                // Check image size
                if (img.naturalWidth > 1200) {
                    console.log('📐 Large image detected, consider optimization:', img.src);
                }
                
                // Add loading optimization
                if (!img.loading) {
                    img.loading = 'lazy';
                }
            });
        },
        
        detectContentGaps: function() {
            const article = document.querySelector('.post-body');
            if (!article) return;
            
            const headings = article.querySelectorAll('h2, h3');
            const gaps = [];
            
            headings.forEach((heading, index) => {
                const nextHeading = headings[index + 1];
                const content = this.getContentBetweenElements(heading, nextHeading);
                
                if (content && content.split(/\s+/).length < 50) {
                    gaps.push({
                        heading: heading.textContent,
                        wordCount: content.split(/\s+/).length
                    });
                }
            });
            
            if (gaps.length > 0) {
                console.log('📝 Content gaps detected (sections with <50 words):', gaps);
            }
        },
        
        getContentBetweenElements: function(start, end) {
            let content = '';
            let current = start.nextElementSibling;
            
            while (current && current !== end) {
                content += current.textContent + ' ';
                current = current.nextElementSibling;
            }
            
            return content.trim();
        }
    };

    // ===================================================================
    // INITIALIZE ALL FEATURES
    // ===================================================================
    
    AlchemistTheme.initializeCriticalFeatures = function() {
        console.log('🔮 Initializing Maximum SEO Power Features...');
        
        this.paragraphFixer.init();
        this.breakingNews.init();
        this.socialSharing.init();
    };
    
    AlchemistTheme.initializeAdvancedSEOFeatures = function() {
        this.tableOfContents.init();
        this.schemaGenerator.init();
        this.readingProgress.init();
    };
    
    AlchemistTheme.initializePerformanceOptimizations = function() {
        this.lazyLoading.init();
        
        // Performance monitoring
        if (AlchemistTheme.config.performanceMetrics) {
            this.monitorPerformance();
        }
    };
    
    AlchemistTheme.initializePWAFeatures = function() {
        this.pwaFeatures.init();
    };
    
    AlchemistTheme.initializeContentIntelligence = function() {
        // Delay content intelligence to avoid blocking
        setTimeout(() => {
            this.contentIntelligence.init();
        }, 2000);
    };
    
    AlchemistTheme.monitorPerformance = function() {
        // Monitor Core Web Vitals and other performance metrics
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('⏱️ Page Load Time:', loadTime, 'ms');
            
            if (loadTime > 3000) {
                console.warn('🐌 Page load time exceeds 3 seconds. Consider optimization.');
            }
            
            // Check resource sizes
            const resources = performance.getEntriesByType('resource');
            resources.forEach(resource => {
                if (resource.transferSize > AlchemistTheme.config.maxImageSize * 1024) {
                    console.warn('📦 Large resource detected:', resource.name, 
                               'Size:', Math.round(resource.transferSize / 1024), 'KB');
                }
            });
        });
    };

    // ===================================================================
    // CLEANUP AND ERROR HANDLING
    // ===================================================================
    
    AlchemistTheme.cleanup = function() {
        // Cleanup observers when leaving page
        this.observers.forEach(observer => {
            if (observer && typeof observer.disconnect === 'function') {
                observer.disconnect();
            }
        });
        this.observers.clear();
    };
    
    window.addEventListener('beforeunload', () => {
        AlchemistTheme.cleanup();
    });
    
    window.addEventListener('error', function(e) {
        console.error('Alchemist Theme Error:', e.error?.message || e.message);
    });

    // ===================================================================
    // START THE MAXIMUM SEO POWER ENGINE
    // ===================================================================
    
    AlchemistTheme.init();
    
    // Make AlchemistTheme globally available
    window.AlchemistTheme = AlchemistTheme;

})();

