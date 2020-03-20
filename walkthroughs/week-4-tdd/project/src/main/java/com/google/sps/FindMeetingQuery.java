// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.HashSet;

public final class FindMeetingQuery {
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
          
      // take out events where all people that attend are not in request
      List<Event> new_events = events.stream()
        .filter(event -> !(Collections.disjoint(event.getAttendees(), request.getAttendees())))
        .collect(Collectors.toList());

      // sort events in ascending time
      Collections.sort(new_events, Comparator.comparing(Event::getWhen,TimeRange.ORDER_BY_START));
      
      int tempStart;
      int tempEnd;  
      int temp = 0;  // this will keep track of the end time of the event that came before

      int duration = (int)request.getDuration();

      List<TimeRange> timeRanges = new ArrayList<TimeRange>();
      
      for ( int i = 0; i < new_events.size() ; i++ ){
          tempStart = new_events.get(i).getWhen().start();
          tempEnd = new_events.get(i).getWhen().end();

          if (i == 0){
            if ( duration <= tempStart){                                                  // the time before the first event   //xxx|--1--|---//
              TimeRange first =  TimeRange.fromStartDuration(0,tempStart);
               timeRanges.add(first);
            }
          }
    
          if ( i != 0){                            // the time between events             //---|-1-|xxxx|-2-|---//
             if ( tempStart - temp >= duration){
                TimeRange between =  TimeRange.fromStartDuration(temp,tempStart-temp);
                timeRanges.add(between);
             } 
          }

          if ( i == new_events.size()-1 && !(tempEnd < temp)){                            //---|-1-|---|-2-|xxx//
              if (1440 - tempEnd >= duration){
                 TimeRange last =  TimeRange.fromStartDuration(tempEnd, 1440 - tempEnd);  // the time after the last event (if not nested)
                 timeRanges.add(last);
              }
          }

          if (tempEnd < temp ){
              if (i == new_events.size()- 1){
                TimeRange last =  TimeRange.fromStartDuration(temp, 1440 - temp);        // nested event case           
                timeRanges.add(last);
              }
          }
          else {
            temp = tempEnd; // if nested event -> dont update temp
          }
      }


      // checks edge cases
      if ( new_events.size() == 0 && duration <= 1440){
          TimeRange allDay =  TimeRange.fromStartDuration(0, 1440);   
          timeRanges.add(allDay);
      }
      
      Collection<TimeRange> result= new ArrayList<TimeRange>(timeRanges); 
      return result;
  }
}
