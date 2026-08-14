/**
 * ============================================================================
 *  PICSMITH — SUPPORT OPTIONS.  THIS IS THE ONLY FILE YOU NEED TO EDIT.
 * ============================================================================
 *
 *  Fill in the details you actually have and leave the rest blank.
 *
 *  ANYTHING LEFT BLANK IS HIDDEN AUTOMATICALLY — nothing half-filled ever
 *  renders on the live page, so it is safe to publish this before you have
 *  every provider set up.
 *
 *  Every value below is intentionally EMPTY. No placeholder account numbers
 *  or wallet addresses are shipped, so there is no way for a supporter to
 *  send money into a void while this is still being configured.
 * ----------------------------------------------------------------------------
 */

window.PICSMITH_SUPPORT = {

  /* --------------------------------------------------------------------------
   *  1. HOSTED PAYMENT PAGES
   *     Paste the full URL. e.g. "https://ko-fi.com/yourname"
   * ------------------------------------------------------------------------ */
  pages: [
    { id: "kofi",       name: "Ko-fi",            url: "", note: "One-off or monthly, cards & PayPal" },
    { id: "bmc",        name: "Buy Me a Coffee",  url: "", note: "The classic. Cards, Apple & Google Pay" },
    { id: "paypal",     name: "PayPal",           url: "", note: "Send any amount directly" },
    { id: "paystack",   name: "Paystack",         url: "", note: "Cards & bank transfer — best for Nigeria" },
    { id: "flutterwave",name: "Flutterwave",      url: "", note: "Cards, bank & mobile money across Africa" },
    { id: "sponsors",   name: "GitHub Sponsors",  url: "", note: "Monthly sponsorship through GitHub" },
  ],

  /* --------------------------------------------------------------------------
   *  2. BANK TRANSFER
   *     Add one block per account. Only fill the rows that apply — blank rows
   *     are dropped. Add as many accounts as you like.
   * ------------------------------------------------------------------------ */
  banks: [
    {
      label: "",            // e.g. "Nigeria (NGN)"
      rows: [
        ["Account name",   ""],
        ["Account number", ""],
        ["Bank",           ""],
      ],
    },
    {
      label: "",            // e.g. "International (USD)"
      rows: [
        ["Account name", ""],
        ["IBAN",         ""],
        ["SWIFT / BIC",  ""],
        ["Bank",         ""],
      ],
    },
  ],

  /* --------------------------------------------------------------------------
   *  3. CRYPTO
   *     Paste the receiving address. DOUBLE-CHECK EVERY CHARACTER — a wrong
   *     address means funds are gone for good, and nobody can reverse it.
   * ------------------------------------------------------------------------ */
  crypto: [
    { name: "Bitcoin",  symbol: "BTC",  network: "Bitcoin",          address: "" },
    { name: "Ethereum", symbol: "ETH",  network: "ERC-20",           address: "" },
    { name: "Tether",   symbol: "USDT", network: "TRC-20 (Tron)",    address: "" },
    { name: "Tether",   symbol: "USDT", network: "ERC-20 (Ethereum)",address: "" },
    { name: "Solana",   symbol: "SOL",  network: "Solana",           address: "" },
    { name: "USD Coin", symbol: "USDC", network: "ERC-20",           address: "" },
  ],

  /* --------------------------------------------------------------------------
   *  4. FREE WAYS TO HELP — these always show, no configuration needed.
   * ------------------------------------------------------------------------ */
  free: [
    { name: "Star the project", url: "https://github.com/alresiainc/picsmith-landing", note: "Takes two seconds and genuinely helps people find it" },
    { name: "Share it",         url: "https://picsmith.alresia.tech/",                 note: "Post it to anyone who's tired of paying a subscription to crop a photo" },
    { name: "Report a bug",     url: "mailto:support@alresia.tech",                    note: "Tell us what broke — that's worth more than a coffee" },
  ],
};
