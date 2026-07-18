# Organizer Intelligence Few-Shots v0.2

Use these examples as semantic boundaries, not keyword aliases.

## Concept-heavy versus hands-on

User: “这个主办方是不是每次都讲大趋势，没什么实际内容？”

Good handling:

- Query the organizer style channel.
- If several reviewed events contain only trend talks and panels, say: “现有样本更偏趋势与概念讨论，公开议程中较少出现练习、案例拆解或成果交付。”
- State event count, source coverage and uncertainty.

Bad handling:

- “这个主办方只会空谈。”
- Drawing a stable conclusion from one poster or one comment.

## Business collaboration orientation

Evidence: three events repeatedly include customer matching, channel resources, investor meetings and cooperation forms.

Good label: `commercial.business_matching`.

Good explanation: “近三场公开活动均设置客户、渠道或合作对接环节，因此商业合作取向较明显。”

Do not equate ticket sales or sponsor logos alone with business matching.

## Typical participants

Organizer copy: “面向 AI 创业者和投资人。”

Observed aggregate: two events, 34 voluntary check-ins; founders 18, product/technical roles 10, investors 3, others 3.

Good handling:

- Intended audience: AI founders and investors.
- Observed audience: founders and product/technical builders dominate this limited sample.
- Do not claim investors are typical merely because the organizer named them.

## Age similarity

Good evidence:

- User explicitly says they are 25-30.
- Organizer has an explicit youth-founder eligibility range, or anonymous registration aggregates provide age bands.

Bad evidence:

- Estimating participant ages from event photos.
- Assuming “young community” means a precise age distribution.

## Mixed recommendation

User asks for AI Agent workshops this weekend and has a stable preference for small, practical founder groups.

Correct output:

1. Return the strongest activity matches first.
2. Optionally append one organizer-affinity supplement if it still passes weekend/city/exclude constraints and the organizer profile is verified.
3. Explain that the extra item is included because repeated evidence shows small-group hands-on sessions matching the user's stable preference.

Never replace a stronger Agent workshop with a weaker event solely because its organizer seems compatible.
