"use client";
import { Container, Title, Text, List } from "@mantine/core";
import { data } from "@/data/CodeOfConduct";

interface SectionProps {
  title: string;
  pre_list?: string[];
  description?: string;
  post_list?: string[];
}

function CodeOfConductSection({
  title,
  pre_list = [],
  description,
  post_list = [],
}: SectionProps) {
  return (
    <div>
      <Title fz={42} fw={800} pt={60} pb={10}>
        {title}
      </Title>

      {pre_list.length > 0 && (
        <List listStyleType="disc" py={8} fz={20} fw={500}>
          {pre_list.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      )}

      {description && (
        <Text py={8} fz={20} fw={500}>
          {description}
        </Text>
      )}

      {post_list.length > 0 && (
        <List listStyleType="disc" py={8} fz={20} fw={500}>
          {post_list.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      )}
    </div>
  );
}

export default function CodeOfConductPage() {
  return (
    <Container size={900} py={40} px={40}>
      <Title fz={64} fw={800}>
        FOSS UOK
        <br />
        Code of Conduct
      </Title>

      {data.map((section, index) => (
        <CodeOfConductSection key={index} {...section} />
      ))}
    </Container>
  );
}
