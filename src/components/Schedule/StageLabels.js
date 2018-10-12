import React from "react";
import { View, Text } from "react-native-web";
import { colors } from "../../colors/colors";
import { defaultStyles } from "../../styles/defaultStyles";
import PropTypes from "prop-types";

export const StageLabels = ({ schedule }) => (
  <View style={styles.container}>
    <View style={styles.timeLabel}>
      <Text style={defaultStyles.text}>Time</Text>
    </View>
    {Object.keys(schedule).map((key, i) => {
      const last = Object.keys(schedule).length === i - 1;
      // const first = i === 0;
      const stage = schedule[key];
      return (
        <View
          style={[styles.stageLabel, last && { borderBottomWidth: 0 }]}
          key={stage.name}
        >
          <Text style={[styles.stageLabelText, defaultStyles.text]}>
            {stage.name}
          </Text>
        </View>
      );
    })}
  </View>
);

StageLabels.propTypes = {
  schedule: PropTypes.any.required
}

const styles = {
  container: {
    flex: 1,
    marginBottom: 16
  },
  stageLabel: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "white",
    backgroundColor: colors.orange
  },
  stageLabelText: {
    textAlign: "center"
  },
  timeLabel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e2e2",
    borderBottomWidth: 2,
    borderBottomColor: colors.orange
  }
};
