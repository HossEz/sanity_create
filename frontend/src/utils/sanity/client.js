import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "uswk0jxy",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

export const writeClient = createClient({
    token: "skJbm5aM1whxLqmFADO4jRTh3F64M9DgmabHYALhqXlpUVhupWQpdIRqHx03elMHqAA5pyRi3xP1tWx8AlxShQO8ZUR7IouoGKw9VyLZBvQDrDnZGHPrwJhCaLBGu93rgsuAHchNzHZjIEcX1nHCUBY7tcg4igld8rmyHjdd97WjpVIRmlcH",
    projectId: "uswk0jxy",
    dataset: "production",
})