const turnConfig = {

    iceServers: [
        {
            urls: "stun:stun.relay.metered.ca:80",
        },
        {
            urls: "turn:standard.relay.metered.ca:80",
            username: "3483c09cc191c043adb7ead4",
            credential: "jhfuiFrRY8SuU8oy",
        },
        {
            urls: "turn:standard.relay.metered.ca:80?transport=tcp",
            username: "3483c09cc191c043adb7ead4",
            credential: "jhfuiFrRY8SuU8oy",
        },
        {
            urls: "turn:standard.relay.metered.ca:443",
            username: "3483c09cc191c043adb7ead4",
            credential: "jhfuiFrRY8SuU8oy",
        },
        {
            urls: "turns:standard.relay.metered.ca:443?transport=tcp",
            username: "3483c09cc191c043adb7ead4",
            credential: "jhfuiFrRY8SuU8oy",
        },
    ],
}

export default turnConfig;