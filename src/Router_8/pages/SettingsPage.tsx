import { useState } from "react";


function SettingsPage() {
  
    const [emailNotifications, setEmailNotifications] = useState(true);

    return (

        <section className="content-card">
            <h2>Settings</h2>

            <label className="setting-row">

                <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(event) => setEmailNotifications(event.target.checked)}
                />
                Enable email notifications
            </label>

            <p>Notifications are {emailNotifications ? "enabled" : "disabled"}.</p>
        </section>
    )
}

export default SettingsPage