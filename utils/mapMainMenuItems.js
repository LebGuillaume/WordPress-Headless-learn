import { v4 as uuid } from "uuid";

export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => {
    return {
      id: uuid(),
      label: menuItem.menuItem.label,
      destination: menuItem.menuItem.destination?.uri || "#",
      subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
        id: uuid(),
        label: subMenuItem.label,
        destination: subMenuItem.destination?.uri || "#",
      })),
    };
  });
};
