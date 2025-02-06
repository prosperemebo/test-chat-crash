//!!this file should be edited only on the top level (from common/commonLib folder)

// Used for setting user's property to track activity on specific a/b flow
// Example: amplitude.setUserProperties({ '[ab test] rebrand_matches': configValue }) where configValue is one of 3: "old" "new" "new_popup"
// Values and types in ../constants

export default function (amplitude) {
    return {
        setABTestingProperty: (type, configValue) => {
            amplitude?.setUserProperties({[type]: configValue })
        }
    }
}
