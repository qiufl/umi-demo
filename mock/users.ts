import mockjs from "mockjs";

export default {
    'GET /api/users': mockjs.mock({
        totalElements: 100,
        "data|10": [
            {
                id: "@id",
                title: "@name",
                description: "@cparagraph(2)",
            },
        ],
    }),
    'GET /api/curr': mockjs.mock({
        id: 1,
        name: 'Admin'
    })
}