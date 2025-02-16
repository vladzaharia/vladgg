document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll<HTMLElement>('.timeline-card');
  let activeCard: HTMLElement | null = null;

  const closeExpanded = (expanded: HTMLElement) => {
    const content = expanded.querySelector<HTMLElement>('.expanded-content');
    if (!content) return;

    // Get the original card's position for animation
    const originalCard =
      expanded.previousElementSibling?.querySelector<HTMLElement>('.timeline-card-content');
    if (!originalCard) return;

    const originalRect = originalCard.getBoundingClientRect();
    const expandedRect = content.getBoundingClientRect();

    // Calculate the scale and translate values
    const scaleX = originalRect.width / expandedRect.width;
    const scaleY = originalRect.height / expandedRect.height;
    const translateX = originalRect.left - expandedRect.left;
    const translateY = originalRect.top - expandedRect.top;

    // Apply the closing animation
    content.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
    expanded.classList.add('opacity-0');
    expanded.classList.remove('opacity-100');

    setTimeout(() => {
      expanded.classList.add('hidden');
      expanded.classList.remove('flex');
      content.style.transform = '';
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

    const position = parseFloat(card.getAttribute('data-position') || '0');
    const side = card.getAttribute('data-side');

    // Determine which thirds to expand into
    const isTop = position < 0.5;
    const isLeft = side === 'left';

    // Set the expanded card position based on thirds
    // Cards on the left of the timeline expand right, and vice versa
    expanded.style.top = isTop ? '0' : '33.333%';
    expanded.style.left = !isLeft ? '0' : '50%';
    expanded.style.right = !isLeft ? '50%' : '0';
    expanded.style.bottom = isTop ? '33.333%' : '0';

    // Mobile layout takes full screen
    if (window.innerWidth < 768) {
      expanded.style.inset = '0';
    }

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
      const translateX = originalRect.left - expandedRect.left;
      const translateY = originalRect.top - expandedRect.top;

      // Set initial position
      expandedContent.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;

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
        expandedContent.style.transform = '';
      });

      activeCard = card;
    });

    closeBtn?.addEventListener('click', () => closeExpanded(expanded));

    expanded.addEventListener('click', (e) => {
      if (e.target === expanded) {
        closeExpanded(expanded);
      }
    });

    // Handle responsive layout changes
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        expanded.style.inset = '0';
      } else {
        expanded.style.top = isTop ? '0' : '33.333%';
        expanded.style.left = !isLeft ? '0' : '50%';
        expanded.style.right = !isLeft ? '50%' : '0';
        expanded.style.bottom = isTop ? '33.333%' : '0';
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
