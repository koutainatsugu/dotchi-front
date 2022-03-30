import createRepository from "~/api/repository.js"

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)

  const repositories = {
    // users: repositoryWithAxios('users'),
    questions: repositoryWithAxios('questions'),
    votes: repositoryWithAxios('votes'),
  }

  inject('repositories', repositories)
}
