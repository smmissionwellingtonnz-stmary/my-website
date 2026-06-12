/* ==========================================================================
   SEED OF HOPE GSAP INTERACTIVE LOGIC PIPELINE
   ========================================================================== */

// Register ScrollTrigger Extension with Core Engine Engine
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. SPLIT-TEXT LETTER TRANSITION INJECTOR ENGINE
    const titleElement = document.getElementById('soh-main-title');
    if (titleElement) {
        const textContent = titleElement.textContent;
        titleElement.innerHTML = ''; // Wipe container clean
        
        // Map string array representation into tracking span constructs
        [...textContent].forEach(char => {
            const span = document.createElement('span');
            span.classList.add('soh-char');
            // Handle space layout gaps representation
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            titleElement.appendChild(span);
        });
    }

    // 2. HERO MASTER ENTER INTRO TIMELINE SYSTEM
    const introTimeline = gsap.timeline();
    
    introTimeline.to('.soh-hero-bg', {
        scale: 1,
        duration: 2.5,
        ease: 'power2.out'
    })
    .to('#hero-seed-shell', {
        opacity: 1,
        duration: 0.6
    }, "-=1.8")
    .to('#hero-stem', {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: 'power1.inOut'
    }, "-=1.2")
    .to(['#hero-leaf-1', '#hero-leaf-2'], {
        opacity: 1,
        stagger: 0.2,
        duration: 0.4
    }, "-=0.4")
    .to('.soh-char', {
        opacity: 1,
        x: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.7)'
    }, "-=0.8")
    .from('.soh-tagline', {
        opacity: 0,
        y: 20,
        duration: 0.8
    }, "-=0.2")
    .from('.soh-hero-buttons, .soh-goal-highlight', {
        opacity: 0,
        y: 15,
        duration: 0.6,
        stagger: 0.15
    }, "-=0.4");

    // 3. CHAPTER EXPANSION COLLAPSE SYSTEM ENGINE
    const expandButtons = document.querySelectorAll('.soh-toggle-expand-btn');
    expandButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const chapter = this.closest('.soh-timeline-chapter');
            const hiddenPane = chapter.querySelector('.chapter-full-content');
            
            if (hiddenPane.style.display === 'block') {
                hiddenPane.style.display = 'none';
                this.innerHTML = 'Read Full Chapter <i class="fa-solid fa-chevron-down"></i>';
                // Trigger global scroll recalculations to adjust position shifts
                ScrollTrigger.refresh();
            } else {
                hiddenPane.style.display = 'block';
                this.innerHTML = 'Collapse Section <i class="fa-solid fa-chevron-up"></i>';
                ScrollTrigger.refresh();
            }
        });
    });

    // 4. SCROLLTRIGGER EXPERIMENTAL TIMELINE CONTROL MATRIX (Desktop Only Layout Guard)
    if (window.innerWidth > 768) {
        
        // Target setup values for drawing strokes via path manipulation lengths
        gsap.set("#root-main, #root-branch-1, #root-branch-2, #stem-growth", {
            strokeDashoffset: function(i, target) { return target.getTotalLength(); },
            strokeDasharray: function(i, target) { return target.getTotalLength(); }
        });

        // Scene mapping orchestration array
        const chapters = document.querySelectorAll('.soh-timeline-chapter');
        
        chapters.forEach((chapter, index) => {
            ScrollTrigger.create({
                trigger: chapter,
                start: "top 60%",
                end: "bottom 40%",
                onEnter: () => updateTimelineGraphic(index, true),
                onEnterBack: () => updateTimelineGraphic(index, false),
                onLeave: () => chapter.classList.remove('active-focus'),
                onLeaveBack: () => chapter.classList.remove('active-focus')
            });
        });
    }

    function updateTimelineGraphic(index, isScrollingDown) {
        // Clear old focuses
        document.querySelectorAll('.soh-timeline-chapter').forEach(c => c.classList.remove('active-focus'));
        document.querySelectorAll('.soh-timeline-chapter')[index].classList.add('active-focus');

        const timelineGraphicTween = gsap.timeline({ overwrite: "auto" });

        switch(index) {
            case 0: // Chapter 1: Unbroken Seed State
                timelineGraphicTween.to('#seed-base', { scale: 1, fill: '#c29b38', duration: 0.5 })
                     .to('#root-main', { strokeDashoffset: gsap.getProperty('#root-main', 'strokeDasharray'), duration: 0.4 }, 0);
                break;
                
            case 1: // Chapter 2: Cracked husk showing root structures
                timelineGraphicTween.to('#seed-base', { fill: '#a07d2a', duration: 0.4 })
                     .to('#root-main', { strokeDashoffset: 0, duration: 0.6, ease: 'power1.out' }, 0)
                     .to('#root-branch-1', { strokeDashoffset: gsap.getProperty('#root-branch-1', 'strokeDasharray'), duration: 0.3 }, 0);
                break;
                
            case 2: // Chapter 3: Emergence of green stem node lines
                timelineGraphicTween.to(['#root-branch-1', '#root-branch-2'], { strokeDashoffset: 0, duration: 0.5, stagger: 0.2 })
                     .to('#stem-growth', { strokeDashoffset: 0, duration: 0.7, ease: 'power2.out' }, "-=0.3")
                     .to('#leaf-left', { scale: 0, duration: 0.3 }, 0);
                break;
                
            case 3: // Chapter 4: Foliage configuration state (First Leaf)
                timelineGraphicTween.to('#leaf-left', { scale: 1, duration: 0.5, ease: 'back.out(2)' })
                     .to('#leaf-right', { scale: 0, duration: 0.3 }, 0);
                break;
                
            case 4: // Chapter 5: Complete structural flourish output (Second Leaf)
                timelineGraphicTween.to('#leaf-right', { scale: 1, duration: 0.5, ease: 'back.out(2)' });
                break;
        }
    }

    // 5. RUNTIME PROGRESS ACQUISITION GRAPHIC ENGINE
    const progressBar = document.getElementById('goal-progress');
    if (progressBar) {
        const targetPercent = progressBar.getAttribute('data-target-percent');
        
        ScrollTrigger.create({
            trigger: '#our-goal',
            start: "top 75%",
            onEnter: () => {
                progressBar.style.width = targetPercent + '%';
            }
        });
    }
});

// 6. ASYNC CLIPBOARD SYSTEM INTERFACE UTILITY
function copyToClipboard(elementId, buttonNode) {
    const textToCopy = document.getElementById(elementId).textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const structuralCachedValue = buttonNode.innerHTML;
        buttonNode.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        buttonNode.classList.add('copied');
        
        // Restore interactive UI state metrics systematically after expiration delay window
        setTimeout(() => {
            buttonNode.innerHTML = structuralCachedValue;
            buttonNode.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to execute modern clipboard extraction architecture: ', err);
    });
}
