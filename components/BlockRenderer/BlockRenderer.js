import CallToActionButton from "components/CallToActionButton/CallToActionButton";
import Column from "components/Column/Column";

import Columns from "components/Columns/Columns";
import { Cover } from "components/Cover";
import FormspreeForm from "components/FormspreeForm/FormspreeForm";
import Gallery from "components/Gallery/Gallery";
import { Heading } from "components/Heading";
import Paragraph from "components/Paragraph/Paragraph";
import PropertyFeatures from "components/PropertyFeatures/PropertyFeatures";
import PropertySearch from "components/PropertySearch/PropertySearch";
import TickItem from "components/TickItem/TickItem";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "acf/tickitem": {
        return (
          <TickItem key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </TickItem>
        );
      }
      case "core/gallery": {
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            crop={block.attributes.imageCrop}
            items={block.innerBlocks}
          />
        );
      }
      case "acf/formspreeform": {
        return (
          <FormspreeForm
            key={block.id}
            formId={block.attributes.data.form_id}
          />
        );
      }
      case "core/post-title": {
        return (
          <Heading
            key={block.id}
            level={1}
            content={block.attributes.content}
          />
        );
      }
      case "acf/propertyfeatures": {
        return (
          <PropertyFeatures
            key={block.id}
            price={block.attributes.price}
            bathrooms={block.attributes.bathrooms}
            bedrooms={block.attributes.bedrooms}
            petFriendly={block.attributes.pet_friendly}
            hasParking={block.attributes.has_parking}
          />
        );
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data?.label || "Call to Action"}
            destination={block.attributes.data?.destination || "/"}
            align={block.attributes.data.align}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            level={block.attributes.level}
          />
        );
      }
      case "acf/propertysearch": {
        return <PropertySearch key={block.id} />;
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes?.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/columns": {
        console.log("Rendering columns block", block);
        return (
          <Columns
            txtColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            key={block.id}
            isStackOnMobile={block.attributes.isStackOnMobile}
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        console.log("Rendering column block", block);
        return (
          <Column
            key={block.id}
            txtColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes?.backgroundColor] ||
              block.attributes?.style?.color?.background
            }
          >
            <BlockRenderer
              blocks={block.innerBlocks}
              width={block.attributes?.width}
            />
          </Column>
        );
      }
      case "core/group": {
        console.log("Rendering group block", block);
        return (
          <div key={block.id} className="my-10">
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      }
      case "core/block": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/image": {
        console.log("Rendering image block", block);
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            alt={block.attributes.alt || ""}
            width={block.attributes.width}
            height={block.attributes.height}
          />
        );
      }

      default:
        console.log("Unknown block type", block);
        return null;
    }
  });
};
