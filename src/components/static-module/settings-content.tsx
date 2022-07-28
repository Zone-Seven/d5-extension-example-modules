// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AdminLabel,
  Background,
  FieldContainer,
  LinkOptions,
} from '@divi/module';
import { GroupContainer } from '@divi/modal';
import {
  RichTextContainer,
  TextContainer,
  UploadContainer,
} from '@divi/field-library';

// Local dependencies.
import { defaultSettingsAttrs } from './constants';

export const SettingsContent = (): ReactElement => (
  <React.Fragment>
    <GroupContainer
      id="mainContent"
      title={__('Text', 'd5-module-extension-example')}
    >
      <FieldContainer
        attrName="title"
        label={__('Title', 'd5-module-extension-example')}
        description={__('Input your value to action title here.', 'd5-module-extension-example')}
        sticky={false}
      >
        <TextContainer />
      </FieldContainer>
      <FieldContainer
        attrName="content"
        label={__('Content', 'd5-module-extension-example')}
        description={__('Input the main text content for your module here.', 'd5-module-extension-example')}
        sticky={false}
      >
        <RichTextContainer />
      </FieldContainer>
    </GroupContainer>
    <GroupContainer
      id="image"
      title={__('Image', 'd5-module-extension-example')}
    >
      <FieldContainer
        attrName="image.image"
        subName="src"
        label={__('Image', 'd5-module-extension-example')}
        description={__('Upload an Image', 'd5-module-extension-example')}
        sticky={false}
      >
        <UploadContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkOptions />
    <Background
      defaultGroupAttr={defaultSettingsAttrs?.background}
    />
    <AdminLabel />
  </React.Fragment>
);
