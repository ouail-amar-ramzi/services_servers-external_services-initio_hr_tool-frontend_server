// api.js
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const api = axios.create({
  baseURL: 'http://mockapi.local'
});

export const mock = new MockAdapter(api);

const events = {
    "upcomingEvents": [
        {
            "title": "Mental health is health",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/mental-health-is-health.svg"
        },
        {
            "title": "Hopink",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/hopink.svg"
        },
        {
            "title": "Echecs Et Med",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/echecs-et-med.svg"
        },
        {
            "title": "Culture Day",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/culture-day.svg"
        },
        {
            "title": "Mental health is health",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/mental-health-is-health.svg"
        },
        {
            "title": "Hopink",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/hopink.svg"
        },
        {
            "title": "Echecs Et Med",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/echecs-et-med.svg"
        },
        {
            "title": "Culture Day",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/culture-day.svg"
        }
    ],
    "previousEvents": [
        {
            "title": "Mental health is health",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/mental-health-is-health.svg"
        },
        {
            "title": "Hopink",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/hopink.svg"
        },
        {
            "title": "Echecs Et Med",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/echecs-et-med.svg"
        },
        {
            "title": "Culture Day",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/culture-day.svg"
        },
        {
            "title": "Mental health is health",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/mental-health-is-health.svg"
        },
        {
            "title": "Hopink",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/hopink.svg"
        },
        {
            "title": "Echecs Et Med",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/echecs-et-med.svg"
        },
        {
            "title": "Culture Day",
            "description": "Lorem ipsum",
            "imageSrc": "/src/assets/events/culture-day.svg"
        }
    ]
}

mock.onGet("/events").reply(200, {
    data: events
});

export default api;