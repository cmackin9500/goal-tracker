import React, { useState, useEffect } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { TouchableOpacity } from "react-native-gesture-handler";

import { globalStyles } from "../styles/global";

const reviewSchema = yup.object({
  name: yup.string().required().min(2),
  foot: yup
    .string()
    .required()
    .test("valid-foot", "Must be Left or Right", (val) => {
      return val === "Left" || val === "Right";
    }),
  height: yup
    .string()
    .required()
    .test("valid-height", "Height must be between 4 feet to 8 feet", (val) => {
      return parseFloat(val) <= 8 && parseFloat(val) >= 4;
    }),
  rating: yup
    .string()
    .required()
    .test("valid-rating", "Rating must be 1-5", (val) => {
      return parseInt(val) >= 1 && parseInt(val) <= 5;
    }),
});

export default function GoalForm({ addGoal }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          description: "",
          startDate: "",
          endDate: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addGoal(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Title"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
              onBlur={props.handleBlur("name")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Description"
              onChangeText={props.handleChange("foot")}
              value={props.values.foot}
              onBlur={props.handleBlur("foot")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.height && props.errors.height}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Start Date"
              onChangeText={props.handleChange("height")}
              value={props.values.height}
              onBlur={props.handleBlur("height")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.height && props.errors.height}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="End Date"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}
