import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_OFFSET = 96;
const MAX_SCROLL_ATTEMPTS = 20;
const RETRY_DELAY_MS = 120;

function scrollToHashTarget(targetId, attempt = 0) {
  const element = document.getElementById(targetId);

  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });

    return;
  }

  if (attempt >= MAX_SCROLL_ATTEMPTS) {
    return;
  }

  window.setTimeout(() => {
    scrollToHashTarget(targetId, attempt + 1);
  }, RETRY_DELAY_MS);
}

export default function HashScrollManager() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = decodeURIComponent(hash.replace(/^#/, ""));

    if (!targetId) {
      return;
    }

    scrollToHashTarget(targetId);
  }, [hash, pathname]);

  return null;
}
