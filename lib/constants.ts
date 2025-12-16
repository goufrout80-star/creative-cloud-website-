// Shared stair-step clip path logic
export const STAIR_CLIP_PATH = `polygon(
  0% 24px, 
  24px 24px, 
  24px 0%, 
  calc(100% - 24px) 0%, 
  calc(100% - 24px) 24px, 
  100% 24px, 
  100% calc(100% - 24px), 
  calc(100% - 24px) calc(100% - 24px), 
  calc(100% - 24px) 100%, 
  24px 100%, 
  24px calc(100% - 24px), 
  0% calc(100% - 24px)
)`;

export const STAIR_CLIP_PATH_SMALL = `polygon(
  0% 12px, 
  12px 12px, 
  12px 0%, 
  calc(100% - 12px) 0%, 
  calc(100% - 12px) 12px, 
  100% 12px, 
  100% calc(100% - 12px), 
  calc(100% - 12px) calc(100% - 12px), 
  calc(100% - 12px) 100%, 
  12px 100%, 
  12px calc(100% - 12px), 
  0% calc(100% - 12px)
)`;

export const STAIR_CLIP_PATH_BUTTON = `polygon(
  10px 0, 
  100% 0, 
  100% calc(100% - 10px), 
  calc(100% - 10px) 100%, 
  0 100%, 
  0 10px
)`;

// Mobile-optimized clip path with smaller corners
export const STAIR_CLIP_PATH_MOBILE = `polygon(
  0% 16px, 
  16px 16px, 
  16px 0%, 
  calc(100% - 16px) 0%, 
  calc(100% - 16px) 16px, 
  100% 16px, 
  100% calc(100% - 16px), 
  calc(100% - 16px) calc(100% - 16px), 
  calc(100% - 16px) 100%, 
  16px 100%, 
  16px calc(100% - 16px), 
  0% calc(100% - 16px)
)`;
