const style = document.createElement('style');
style.innerHTML = `
  portal {
    position:fixed;
    width: 595.75px;
    height: 475px;
    border-radius: 1rem;
    opacity: 0;
    transform: scale(0.4);
    transform-origin: top left;
    top: 350px;
    left: 1027.984375px;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  portal:hover {
          box-shadow: 0 0 20px 10px #999;
          cursor: pointer;
  }
  .portal-transition {
    transition: all 0.3s;
  }
  @media (prefers-reduced-motion: reduce) {
    .portal-transition {
      transition: transform 0.001s;
    }
  }
  .portal-reveal {
    transform: scale(1.0) translateX(-929.5px) translateY(-350px);
    width: 100vw;
    height: 100vh;
  }
  @keyframes fade-in {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
`;
const portal = document.createElement('portal');
portal.src = 'https://docs.google.com/document/d/1ky39OcBE6UNrm9YhTtEBp9Rb2VPTsJsEdN6lvbQ4Dqo/';
portal.classList.add('portal-transition');
portal.addEventListener('click', evt => {
  portal.classList.add('portal-reveal');
});
portal.addEventListener('transitionend', evt => {
  if (evt.propertyName == 'transform') {
    portal.activate();
  }
});
document.body.append(style, portal);

