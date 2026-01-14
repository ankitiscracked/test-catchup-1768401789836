// Rate limit handling
export class RateLimiter {
  private requestCount = 0;
  private windowStart = Date.now();

  async checkLimit(): Promise<boolean> {
    const now = Date.now();
    if (now - this.windowStart > 60000) {
      this.requestCount = 0;
      this.windowStart = now;
    }
    return this.requestCount++ < 100;
  }
}
