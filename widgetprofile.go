// Package widgetprofile is the "Profile" DRIVER — Photo, localized name/role and a rotating quote.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-profile"
package widgetprofile

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "profile",
		Title:       "Profile",
		DefaultZone: "sidebar",
		Asset:       "/widgets/profile.js",
	})
}
