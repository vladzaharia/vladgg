document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll<HTMLElement>('.timeline-card');
  let activeCard: HTMLElement | null = null;

  const closeExpanded = (expanded: HTMLElement) => {
    const content = expanded.querySelector<HTMLElement>('.expanded-content');
    if (!content) return;

    // Get the original card's position for animation
    const originalCard = expanded.previousElementSibling as HTMLElement;
    if (!originalCard) return;

    const originalContent = originalCard.querySelector<HTMLElement>('.timeline-card-content');
    if (!originalContent) return;

    const originalRect = originalContent.getBoundingClientRect();
    const expandedRect = content.getBoundingClientRect();

    // Calculate the scale and translate values
    const scaleX = originalRect.width / expandedRect.width;
    const scaleY = originalRect.height / expandedRect.height;

    // Calculate position to align centers
    const originalLeft = originalRect.left;
    const originalTop = originalRect.top;
    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;

    // Add offset based on side
    const isLeft = originalCard.dataset.side === 'left';
    const offsetX = !isLeft ? -250 : 250;

    // Calculate the transform origin point
    const transformOriginX = isLeft ? '0%' : '100%';
    content.style.transformOrigin = `${transformOriginX} 50%`;

    // Calculate the position that would align the expanded card with the original
    const translateX = originalLeft - windowCenterX + (isLeft ? 0 : originalRect.width) + offsetX;
    const translateY = originalTop - windowCenterY + originalRect.height / 2;

    // Apply the closing animation
    content.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${scaleX}, ${scaleY})`;
    expanded.classList.add('opacity-0');
    expanded.classList.remove('opacity-100');

    setTimeout(() => {
      expanded.classList.add('hidden');
      expanded.classList.remove('flex');
      content.style.transform = `translate(calc(-50% + ${offsetX}px), -50%)`;
      content.style.transformOrigin = 'center';
      if (!document.querySelector('.timeline-card-expanded.flex')) {
        document.body.style.overflow = '';
      }
    }, 300);

    if (activeCard === expanded.previousElementSibling) {
      activeCard = null;
    }
  };

  cards.forEach((card) => {
    const content = card.querySelector<HTMLElement>('.timeline-card-content');
    const expanded = card.nextElementSibling as HTMLElement;
    const expandedContent = expanded?.querySelector<HTMLElement>('.expanded-content');
    const closeBtn = expanded?.querySelector('.close-expanded');

    if (!content || !expanded || !expandedContent) return;

    content.addEventListener('click', () => {
      // If there's an active card and it's not this one, close it first
      if (activeCard && activeCard !== card) {
        const activeExpanded = activeCard.nextElementSibling as HTMLElement;
        if (activeExpanded) {
          closeExpanded(activeExpanded);
        }
      }

      // Get the original card's position for animation
      const originalRect = content.getBoundingClientRect();

      // First show the expanded card but make it invisible
      expanded.classList.remove('hidden');
      expanded.classList.add('flex');
      expanded.style.visibility = 'hidden';
      expandedContent.style.transition = 'none';

      // Force a reflow to ensure the expanded card is positioned
      expanded.offsetHeight;

      // Get the final expanded position
      const expandedRect = expandedContent.getBoundingClientRect();

      // Calculate the initial scale and translate values
      const scaleX = originalRect.width / expandedRect.width;
      const scaleY = originalRect.height / expandedRect.height;

      // Calculate position to align with original card
      const originalLeft = originalRect.left;
      const originalTop = originalRect.top;
      const windowCenterX = window.innerWidth / 2;
      const windowCenterY = window.innerHeight / 2;

      // Add offset based on side
      const isLeft = card.dataset.side === 'left';
      const offsetX = !isLeft ? -250 : 250;

      // Calculate the transform origin point
      const transformOriginX = isLeft ? '0%' : '100%';
      expandedContent.style.transformOrigin = `${transformOriginX} 50%`;

      // Calculate the position that would align the expanded card with the original
      const translateX = originalLeft - windowCenterX + (isLeft ? 0 : originalRect.width) + offsetX;
      const translateY = originalTop - windowCenterY + originalRect.height / 2;

      // Set initial position
      expandedContent.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${scaleX}, ${scaleY})`;

      // Force a reflow to ensure the transform is applied
      expandedContent.offsetHeight;

      // Make the card visible and restore transition
      expanded.style.visibility = '';
      expandedContent.style.transition = '';
      document.body.style.overflow = 'hidden';

      // Trigger animation to final position
      requestAnimationFrame(() => {
        expanded.classList.add('opacity-100');
        expanded.classList.remove('opacity-0');
        expandedContent.style.transform = `translate(calc(-50% + ${offsetX}px), -50%)`;
        expandedContent.style.transformOrigin = 'center';
      });

      activeCard = card;
    });

    closeBtn?.addEventListener('click', () => closeExpanded(expanded));

    expanded.addEventListener('click', (e) => {
      if (e.target === expanded || e.target === expanded.querySelector('.fixed.inset-0')) {
        closeExpanded(expanded);
      }
    });
  });

  // Close active card when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeCard) {
      const activeExpanded = activeCard.nextElementSibling as HTMLElement;
      if (activeExpanded) {
        closeExpanded(activeExpanded);
      }
    }
  });
});
