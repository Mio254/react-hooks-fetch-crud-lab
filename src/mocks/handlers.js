import { rest } from "msw";

export const handlers = [
  // GET all questions
  rest.get("http://localhost:4000/questions", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, prompt: "lorem testum 1", answers: ["A", "B", "C"], correctIndex: 0 },
        { id: 2, prompt: "lorem testum 2", answers: ["X", "Y", "Z"], correctIndex: 1 },
      ])
    );
  }),

  // POST a new question
  rest.post("http://localhost:4000/questions", async (req, res, ctx) => {
    const newQuestion = await req.json();
    return res(ctx.status(201), ctx.json({ id: 3, ...newQuestion }));
  }),

  // PATCH update question
  rest.patch("http://localhost:4000/questions/:id", async (req, res, ctx) => {
    const updates = await req.json();
    return res(ctx.status(200), ctx.json({ id: req.params.id, ...updates }));
  }),

  // DELETE a question
  rest.delete("http://localhost:4000/questions/:id", (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
