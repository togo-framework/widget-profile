import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "./index";

const meta = { title: "Widgets/Profile", component: Profile } satisfies Meta<typeof Profile>;
export default meta;

export const Default: StoryObj<typeof Profile> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Profile> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
