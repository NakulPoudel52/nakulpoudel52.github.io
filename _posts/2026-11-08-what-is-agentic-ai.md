---
title: "What Is Agentic AI? The Plan-Act-Observe Loop"
author: Nakul Poudel
date: 2026-11-08
comments: false
share: false
---

Most AI tools I use answer one prompt and then stop. I ask a question, the model writes a reply, and the exchange is finished. That is useful when I already know the single step I want. It is not what people mean by agentic AI. An agentic system is set up to keep working until a goal is actually met, instead of treating the first reply as the whole job.

The definition I use comes from a slide I keep for this idea. Agentic AI achieves a goal. It uses multi-step reasoning and planning. It uses tools. It makes decisions and takes action. It does this with minimal human intervention. The human still chooses the goal and can look at the outcome, but the steps in between are the agent's to carry out.

A single prompt is a transaction. You supply the input, you receive an output, and nothing else happens unless you type again. An agent is closer to a small process. It is allowed to break the goal into steps, choose a next action, use something outside the text box, and then decide whether to continue. The difference is not that the underlying model is magically wiser. The difference is that the system is organized around a goal and a loop, not around one answer.

The picture I use for this is a loop, shown below.

<figure class="blog-figure">
  <img src="{{ site.baseurl }}/images/blog/agentic-ai-loop.png" alt="Flow diagram of an agentic AI loop. A human sets a goal. The agent plans the next step, calls tools, and observes the result, repeating until the goal is met." width="1960" height="1462">
  <figcaption>An agentic AI loop: a human sets the goal, and the agent repeatedly plans, acts through tools, and observes the result until the goal is met.</figcaption>
</figure>

Here is how I walk through that diagram, using the labels on the figure.

Human sets goal. That is the only box outside the loop. A person decides what should count as finished and sends that intent downward. Without that step, the rest of the diagram has nothing to aim at.

Goal. The goal sits at the top of the process. An arrow runs from it into planning. I read this box as the thing the loop is trying to satisfy, not as a one-time instruction that disappears after the first reply.

Plan / reason (decide next step). This is where the agent chooses what to do next. It does not have to solve the entire problem in one guess. It looks at the goal and at anything it has already learned, and it picks one step that should move the work forward. People often call this kind of cycle a ReAct-style loop, which is short for reason plus act: reason about the next step, act, then reason again with new information.

Act (call tools). Planning only changes the world if the agent can do something. In this box the agent calls tools. A tool might be another model, a function, a search, or any other action the system is allowed to take. The point is that the agent is not limited to writing a paragraph. It takes an action and expects something to come back.

Observe result (tool / environment feedback). After the action, the agent reads the result. The diagram labels this as feedback from the tool or from the environment. That might be a successful output, an error, or a partial result that is not yet good enough. Observation is not the end of the process. An arrow runs from this box back up to Plan / reason, so the agent can choose another step with the new information in hand. The circular arrow in the middle of the figure is that repetition: plan, act, observe, and plan again.

Goal met, Done. The loop has an exit. When the goal is met, the diagram leaves the cycle and ends at Done. Until that check passes, the agent is supposed to stay in the loop rather than stop at the first attempt.

A short practical note belongs next to this picture. Minimal human intervention does not have to mean no human at all. The diagram already starts with a person setting the goal. It is also reasonable for a person to look at the result before treating the work as finished, especially when a mistake would be costly. The agent can handle the repetitive middle: deciding a next step, calling tools, and reading what came back. A person can still define the goal and check whether the outcome is acceptable. I mean that as a general way to use this loop, not as a measured claim about how often it succeeds.

Agentic AI, in the sense of this diagram, is a goal pursued by planning, acting through tools, and observing the result, repeated until the goal is met. The figure is the whole idea in one place: a human sets the goal, the agent cycles through Plan / reason, Act, and Observe result, and the process ends at Goal met, Done.
