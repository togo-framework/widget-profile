// @togo-framework/widget-profile — a DRIVER with settings-backed inline editing
// (mirrors the real profile widget storing translatable copy in site_settings).
import { registerWidget, type WidgetContext } from "@togo-framework/widget";

export function Profile({ settings, setSettings, editing }: WidgetContext) {
  const name = (settings.name as string) ?? "Fady Mondy";
  const role = (settings.role as string) ?? "Senior Tech Lead & AI Expert";

  if (editing) {
    return (
      <div className="edit-form">
        <label>
          Name
          <input value={name} onChange={(e) => setSettings({ name: e.target.value })} />
        </label>
        <label>
          Role
          <input value={role} onChange={(e) => setSettings({ role: e.target.value })} />
        </label>
      </div>
    );
  }
  return (
    <div className="profile">
      <div className="avatar">{name.trim().charAt(0) || "?"}</div>
      <div>
        <div className="profile-name">{name}</div>
        <div className="profile-role">{role}</div>
      </div>
    </div>
  );
}

registerWidget({
  key: "profile",
  title: "Profile",
  defaultZone: "sidebar",
  defaultSettings: { name: "Fady Mondy", role: "Senior Tech Lead & AI Expert" },
  Comp: Profile,
});
