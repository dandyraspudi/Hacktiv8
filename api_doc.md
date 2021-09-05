## List endpoint

### `GET /jobs`
```
get all jobs
```

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 3,
        "title": "full time",
        "description": "react, vue, html, css, scss, tailwind, bootstrap",
        "imgUrl": "https://cdn.pixabay.com/photo/2019/07/16/18/18/frontend-4342425__480.png",
        "jobType": "Frontend Developer",
        "createdAt": "2021-08-31T01:05:07.509Z",
        "updatedAt": "2021-08-31T01:05:07.509Z",
        "companyId": null,
        "authorId": null
    }
    ...
]
```

_Response (500)_
```
500 Internal Server Error
```


### `POST /jobs`
```
create job
```

_Request Header_
```
not needed
```

_Request Body_
```
{
    "title": <string>,
    "description": <string>,
    "imgUrl": <string>,
    "jobType": <string>,
    "authorId": <integer>,
    "companyId": <integer>
}
```

_Response (201)_
```
{
    "id": 6
    "title": "full time",
    "description": "mekanik pengalaman 2 tahun",
    "imgUrl": "https://cdn.pixabay.com/photo/2019/07/16/18/18/frontend-4342425__480.png",
    "jobType": "mekanik"
}
```

_Response (400)_
```
{
    "message": [
        "title is required",
        "description is required",
        "image is required",
        "job type is required"
    ]
}
```

_Response (500)_
```
500 internal server error
```


### `GET /jobs/:id`
```
get jobs by id
```

_Request Header_
```
not needed
```

_Request Params_
```
id
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 3,
    "title": "full time",
    "description": "react, vue, html, css, scss, tailwind, bootstrap",
    "imgUrl": "https://cdn.pixabay.com/photo/2019/07/16/18/18/frontend-4342425__480.png",
    "jobType": "Frontend Developer",
    "createdAt": "2021-08-31T01:05:07.509Z",
    "updatedAt": "2021-08-31T01:05:07.509Z",
    "companyId": null,
    "authorId": null
}
```

_Response (404)_
```
{
    "message": "Job 1 not found"
}
```


### `PUT /jobs/:id`
```
modify/update job post by id
```

_Request Header_
```
not needed
```

_Request Params_
```
id
```

_Request Body_
```
{
    "title": <string>,
    "description": <string>,
    "imgUrl": <string>,
    "jobType": <string>,
    "authorId": <integer>,
    "companyId": <integer>,
}
```

_Response (200)_
```
{
    "id": <id>,
    "title": <title>,
    "description": <description>,
    "imgUrl": <imgUrl>,
    "jobType": <jobType>,
    "authorId": <authorId>,
    "companyId": <companyId>
}
```

_Response (404)_
```
{
    "message": "Job 4 not found"
}
```

_Response (400)_
```

```

_Response (500)_
```
500 internal server error
```


### `DELETE /jobs:id`
```
delete job by id
```

_Request Header_
```
not needed
```

_Request Params_
```
id
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "message": "${title} success to delete"
}
```

_Response (404)_
```
{
    "message": "Job 4 not found"
}
```

_Response (500)_
```
500 internal server error
```
