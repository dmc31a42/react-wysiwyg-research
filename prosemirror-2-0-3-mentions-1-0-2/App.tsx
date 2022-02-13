// eslint-disable-next-line simple-import-sort/imports
import {
  plugins,
  schema as basicSchema,
  toolbar,
} from '@aeaton/react-prosemirror-config-default'
import {
  ChangeHandler,
  Editor,
  EditorProvider,
  Floater,
  HtmlEditor,
  Toolbar,
  useDebounce,
} from '@aeaton/react-prosemirror'
import {
  createHTMLTransformer,
  createJSONTransformer,
  createNullTransformer,
} from '@aeaton/prosemirror-transformers'
import { Node as ProsemirrorNode, Schema, SchemaSpec } from 'prosemirror-model'
import React, { useMemo, useState } from 'react'
import { getMentionsPlugin, addMentionNodes } from 'prosemirror-mentions';

import './styles/demo.css'
import './styles/prosemirror.css'
import './mentions.css'


const schema = new Schema({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  nodes: addMentionNodes(basicSchema.spec.nodes),
  marks: basicSchema.spec.marks
});

const htmlTransformer = createHTMLTransformer(schema)
const jsonTransformer = createJSONTransformer(schema)
const nullTransformer = createNullTransformer()

const initialValue = `<p></p>`
const initialDoc = htmlTransformer.parse(initialValue)

const floatingTools = toolbar.slice(0, 2)
const fixedTools = toolbar.slice(2)

// TODO: nodeviews, perhaps displaying a node type switcher alongside each node?

interface MensionItem {
  name: string;
  id: string;
  email: string;
}
/**
 * IMPORTANT: outer div's "suggestion-item-list" class is mandatory. The plugin uses this class for querying.
 * IMPORTANT: inner div's "suggestion-item" class is mandatory too for the same reasons
 */
const getMentionSuggestionsHTML = (items: MensionItem[]) => (
  <div className="suggestion-item-list">
  {
    items.map(i => <div key={i.id} className="suggestion-item">{i.name}</div>)
  }
  </div>
)

const getTagSuggestionsHTML = (items: {tag: string}[]) => (
<div className="suggestion-item-list">
  {items.map(i => <div key={i.tag} className="suggestion-item">{i.tag}</div>)}
</div>
);

const mentionList = [
  {name: 'John Doe', id: '101', email: 'joe@gmail.com'}, 
  {name: 'Joe Lewis', id: '102', email: 'lewis@gmail.com'},
  {name: '한글', id: '103', email: 'test@mgial.com'},
  {name: '한글 입력', id: '103', email: 'test@mgial.com'},
  {name: '한글 입력 인식', id: '103', email: 'test@mgial.com'},
  {name: '한글 입력 인식 테스트', id: '103', email: 'test@mgial.com'},
];

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const mentionPlugin = getMentionsPlugin({
  allowSpace: true,

  getSuggestions: (type: string, text: string, done: (arg0: any) => void) => {
    setTimeout(() => {
      // if (type === 'mention') {
          // pass dummy mention suggestions
          console.log(text);
          done(mentionList.filter(x => ~x.name.indexOf(text)))
      // } else {
      //     // pass dummy tag suggestions
      //     done([{tag: 'WikiLeaks'}, {tag: 'NetNeutrality'}])
      // }
    }, 0);
  },
  // getSuggestionsHTML: (items: MensionItem[], type: string) =>  {
  //   // if (type === 'mention') {
  //     return getMentionSuggestionsHTML(items)
  //   // } else if (type === 'tag') {
  //   //   return getTagSuggestionsHTML(items)
  //   // }
  // }
});
plugins.unshift(mentionPlugin);

export const App: React.FC = () => {
  const [doc, setDoc] = useState<ProsemirrorNode>(initialDoc)

  const [html, setHTML] = useState<string>(initialValue)

  return (
    <div>
      <div className="prosemirror-demo">
        <div className="prosemirror-demo-editor">
          <HtmlEditor
            schema={schema}
            plugins={plugins}
            value={initialValue}
            handleChange={setHTML}
            debounce={50}
          >
            <Toolbar toolbar={toolbar} />
            <Editor autoFocus />
          </HtmlEditor>
        </div>
        <div className="prosemirror-demo-output">
          <pre>{html}</pre>
        </div>
      </div>

      <div className="prosemirror-demo">
        <div className="prosemirror-demo-editor">
          <EditorProvider plugins={plugins} doc={initialDoc}>
            <ChangeHandler
              handleChange={setDoc}
              transformer={nullTransformer}
            />
            <Toolbar toolbar={fixedTools} />
            <Floater>
              <Toolbar toolbar={floatingTools} />
            </Floater>
            <Editor autoFocus />
          </EditorProvider>
        </div>
        {doc !== undefined && (
          <div className="prosemirror-demo-output">
            <JSONOutput doc={doc} />
            <HTMLOutput doc={doc} />
          </div>
        )}
      </div>
    </div>
  )
}

const JSONOutput: React.FC<{ doc: ProsemirrorNode }> = ({ doc }) => {
  const debouncedDoc = useDebounce(doc, 50)

  const json = useMemo(() => jsonTransformer.serialize(debouncedDoc), [
    debouncedDoc,
  ])

  return (
    <div className="output">
      <pre>{json}</pre>
    </div>
  )
}

const HTMLOutput: React.FC<{ doc: ProsemirrorNode }> = ({ doc }) => {
  const [html, setHTML] = useState('')

  // serialize when the button is clicked
  const handleClick = () => {
    setHTML(htmlTransformer.serialize(doc))
  }

  return (
    <div className="output">
      <button type="button" onClick={handleClick}>
        Show HTML
      </button>
      <pre>{html}</pre>
    </div>
  )
}
