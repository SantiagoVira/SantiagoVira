import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import Layout from "@components/layout";
import { useMarv } from "@hooks/useMarv";
import { Field, Form, Formik } from "formik";
import { NextPage } from "next";
import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Index: NextPage = () => {
  const [response, setResponse] = useState("");
  const mutation = useMutation((newItem: { val: string }) =>
    axios.post("/api/sarcasm", newItem)
  );

  console.log(mutation.data?.data.marv);

  return (
    <Layout justifyContent="center" alignItems="center" h="100%" pb="6.5rem">
      <Heading w="80%" textAlign="left" mb="2rem">
        Computers Can Be Sarcastic Too
      </Heading>
      <Formik
        initialValues={{ prompt: "" }}
        onSubmit={(values, actions) => {
          const val = values.prompt;
          mutation.mutate({ val });

          actions.setSubmitting(false);
        }}>
        {(props) => (
          <Form style={{ width: "80%" }}>
            <Field name="prompt">
              {({ field }: any) => (
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="off"
                    placeholder="Enter your query: "
                  />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Text w="80%" mt="3rem">
        Marv:{` ${mutation.data?.data.marv ?? "..."}`}
      </Text>
    </Layout>
  );
};

export default Index;
