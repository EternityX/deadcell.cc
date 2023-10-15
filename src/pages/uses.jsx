import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use day-to-day, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use day-to-day, and other things I recommend."
      >
        <div className="space-y-20">
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Currently the best code editor on the market, you’re missing out if you don’t use VS code. This site was written using VS Code.
            </Tool>
            <Tool title="Visual Studio 2022">
              All my driver development is done in Visual Studio. I don’t think you would want to do driver development outside of Visual Studio personally.
            </Tool>
            <Tool title="CLion">
              If I’m writing regular software, I like CLion for the well-integrated support of multiple toolchains such as LLVM.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Sublime Merge">
              Simple and easy to use graphical interface for Git when you don’t want to mess with the command line.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
