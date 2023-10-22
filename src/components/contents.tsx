function Contents() {
  const posts = [
    {
      title: "Produtividade, rotina matinal e a importância do equilíbrio",
      date: "Setembro 2020",
      description:
        '"O que você faz fora do trabalho é tão importante para a produtividade do seu trabalho quanto o que você faz enquanto está trabalhando."',
      tags: [
        "Produtividade",
        "Trabalho",
        "Home Office",
        "Equilíbrio",
        "Hábitos Saudáveis",
      ],
      readTime: "10 min",
      link: "https://medium.com/@danjsillva/produtividade-rotina-matinal-e-a-importância-do-equilíbrio-dafdf768c33f",
    },
    {
      title: "Setup de desenvolvimento 2022",
      date: "Maio 2022",
      description:
        "De forma resumida, eu diria que o novo setup é mais focado na experiência do usuário enquanto o setup anterior era mais voltado à performance.",
      tags: ["Setup", "Workflow", "Development", "Coding", "Operating Systems"],
      readTime: "3 min",
      link: "https://medium.com/@danjsillva/setup-de-desenvolvimento-2022-4bf91c1111da",
    },
    {
      title: "Minha experiência de migração do VS Code para o Neovim",
      date: "Em breve",
      description:
        '"O que você faz fora do trabalho é tão importante para a produtividade do seu trabalho quanto o que você faz enquanto está trabalhando."',
      tags: ["Setup de Desenvolvimento", "Produtividade", "Editor de Código", "Neovim"],
      readTime: "0 min",
      link: "",
    },
  ];

  return (
    <section className="flex justify-center text-zinc-900 bg-white w-full h-full mt-10 sm:mt-20 lg:mt-40">
      <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center py-20 lg:py-40 gap-8">
        {posts.map((post) => (
          <a key={post.title} href={post.link} target="blank" className="max-w-[24rem] w-full p-8 border border-zinc-200 rounded">
            <article>
              <header>
                <h1 className="text-2xl font-bold truncate">{post.title}</h1>
                <h2 className="font-bold">
                  {post.date} • {post.readTime}
                </h2>
              </header>

              <p className="font-thin mt-4">{post.description}</p>

              <div className="flex flex-wrap gap-1 mt-4">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm text-zinc-800 bg-zinc-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contents;
