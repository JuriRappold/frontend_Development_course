# Schedule
1. Motion -> Transitions -> Live Coding
2. Key Frames -> Live Coding
3. Performances +A11y
4. Exercises + Quizzes

# Motion Interfaces
- why motions
  - guides attention
  - state change feedback (instant feedback)
- passive vs active
  - Transitions (A->B)
    - just goes from a to b, is time based
  - Animations (timeline)
    - is also time based
    - uses keyframes, ie control how animation goes through time??
# Transition
```css
/* shorthand */
.selector{ transition: transform}
```
## Timing & Props
- timing
  - ease, linear, ease-in/-out
  - cubic-bezier
  - steps(n, start | end)
- Animate these
  - transform, opacity
- avoid heavy 
  - width/height/top/left
  - big-box shadows

## Events & Pitfalls
- events
  - transitioned for chaining/cleanup
- pitfalls
  - display: none -> block won't animate
    - maybe solves spacing issues, use opacity
  - initial paint issues
## Elevated Button
```css
.btn{
    padding: ;
    border: ;
    border-radius ;
    background-color: ;
    transform: ;
    
}
```
:active -> clicked?
:focus-visible -> tabbed/arrow-keys

## Link Underline SLide-In
- origin
- from where to where??



# Keyframes
```css
@keyframes fade-in-up{
from{opacity: 0; transform: translateY(8px);}
to{opacity: 1; transform: translateY(0);}
}
.card {animation: fade-in-up....
```

sprites: step by step image loading

# Performance
## Fundamentals


## Hint


## Reduced Motion & Focus
- accessiability setting in OS: @media(prefers-reduced-motion: reduce{...})

# Skeleton Loader
```css
<div class="skeleton card"> </div>

.skeleton {
     background: linear-gradient(90deg, #eee 25%, #f5f5f5 37%, #eee 63%);
     background-size: 400% 100%;
     animation: shimmer 1.2s ease-in-out infinite;
}
@keyframes shimmer {
    to{
        background-position: 100% 0;
    }
}
```

# Live-Coding
1. Elevated Button
   2. S1
2. Link Underline (transition)
   3. S2
3. Keyframes: Fade-in +Stagger
   4. S3
4. steps() Typing Effect
   5. S4
5. Skeleto Loader (shimmer)
   6. S5
6. Modal (CSS-only with :checked)
   7. S6

# Links
https://cssgradient.io/ <br>
https://html-css-js.com/css/generator/box-shadow/