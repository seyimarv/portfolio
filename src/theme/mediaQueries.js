const sizes = {
  smallPhone: "30em",
  phone: "36.5em",
  tabport: "56.25em",
  tabland: "75em",
  bigdesktop: "112.5em",
};

export const devices = {
  down: {
    smallPhone: `@media screen and (max-width: ${sizes.smallPhone})`,
    phone: `@media screen and (max-width: ${sizes.phone})`,
    tabport: `@media screen and (max-width: ${sizes.tabport})`,
    tabland: `@media screen and (max-width: ${sizes.tabland})`,
    bigdesktop: `@media screen and (max-width: ${sizes.bigdesktop})`,
  },
  up: {
    smallPhone: `@media screen and (min-width: ${sizes.smallPhone})`,
    phone: `@media screen and (min-width: ${sizes.phone})`,
    tabport: `@media screen and (min-width: ${sizes.tabport})`,
    tabland: `@media screen and (min-width: ${sizes.tabland})`,
    bigdesktop: `@media screen and (min-width: ${sizes.bigdesktop})`,
  },
};
