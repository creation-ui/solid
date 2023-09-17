export default function DocsPage() {
  return (
    <div>
      Creation UI is a design system that lets you build a React powered
      websites and apps. It's built on top of React and Tailwind CSS(opens in a
      new tab) and it's fully customizable. It's a great starting point for your
      next project. Prerequisites Creation UI is working with your app's
      Tailwind CSS and you need to have Tailwind CSS installed in your project -
      Tailwind CSS Installation(opens in a new tab). Installation To install
      Creation UI, run command below: yarn add @creation-ui/react Configuration
      Add withTailwindConfig to your tailwind.config.js file: You can extend all
      properties as usual(opens in a new tab). Import library's CSS file into
      your app. If you're using standard config of Next.js, you should import it
      in pages/_app.js or similar. If you're using standard config of
      create-react-app or Vite, you should import it in index.js or similar.
      import '@creation-ui/react/index.css' Start using it!
    </div>
  )
}
