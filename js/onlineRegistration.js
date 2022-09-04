// 檢查附檔名格式
function checkfile(sender) {

    // 可接受的附檔名
    var validExts = new Array(".jpg", ".png");

    var fileExt = sender.value;
    fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
    if (validExts.indexOf(fileExt) < 0) {
        alert("檔案類型錯誤，可接受的副檔名有：" + validExts.toString());
        sender.value = null;
        return false;
    }
    else return true;
}

$(document).ready(function () {

    // 租借資訊
    $(document).on('click', '.addTeamMember', function () {
        var teamMember = '<div><hr><div class="row mt-4 mb-4 px-3 pt-4 g-2">\
                            <div class="row col-lg-6 px-3">\
                              <div class="col-lg-2"><label for="academicSystemTeamMember" class="form-label">學制<span class="red">*</span></label></div>\
                              <div class="col-lg-8"><input type="text" class="form-control borderR15" aria-label="academicSystem">\
                              </div>\
                            </div>\
                            <div class="row col-lg-6 px-3">\
                              <div class="col-lg-2 topMarginLabel"> <label for="classNameTeamMember" class="form-label">班級<span class="red">*</span></label></div>\
                              <div class="col-lg-8"><input type="text" class="form-control borderR15"\
                                aria-label="classNameTeamMember">\
                              </div>\
                            </div>\
                          </div>\
                          <div class="row mt-4 mb-4 px-3 g-2">\
                            <div class="row col-lg-6 px-3">\
                                <div class="col-lg-2"><label for="departmentTeamMember" class="form-label">科系<span class="red">*</span></label></div>\
                                <div class="col-lg-8"><input type="text" class="form-control borderR15"\
                                    aria-label="departmentTeamMember">\
                                </div>\
                            </div>\
                            <div class="row col-lg-6 col-sm-auto px-3">\
                                <div class="col-lg-2 topMarginLabel"><label for="studentIdTeamMember" class="form-label">學號<span class="red">*</span></label></div>\
                                <div class="col-lg-8"><input type="text" class="form-control borderR15"\
                                aria-label="studentIdTeamMember">\
                                </div>\
                            </div>\
                          </div>\
                        <div class="row mt-4 mb-4 px-3 g-2">\
                            <div class="row col-lg-6 px-3">\
                                <div class="col-lg-2"><label for="nameTeamMember" class="form-label">姓名<span class="red">*</span></label></div>\
                                <div class="col-lg-8"><input type="text" class="form-control borderR15" aria-label="nameTeamMember">\
                                </div>\
                            </div>\
                            <div class="row col-lg-6 px-3">\
                                <div class="col-lg-3 text-left ps-0"><label for="workContentTeamMember"\
                                class="form-label topMarginLabel">工作內容<span class="red">*</span></label></div>\
                                <div class="col-lg-9"><input type="text" class="form-control borderR15"\
                                    aria-label="workContentTeamMember">\
                                </div>\
                            </div>\
                        </div>\
                        <div class="row mt-4 mb-4 px-3">\
                            <div class="col-lg-auto"><label for="phoneTeamMember" class="form-label ps-lg-3 pe-lg-1">行動電話<span class="red">*</span></label></div>\
                            <div class="col-lg-5 col-sm-auto"><input type="text" class="form-control borderR15" id="phoneTeamMember"\
                                    name="phone">\
                            </div>\
                        </div>\
                        <div class="row mt-4 mb-4 px-3">\
                            <div class="col-lg-auto"><label for="emailTeamMember" class="form-label ps-lg-3 pe-lg-1">電子郵件<span class="red">*</span></label></div>\
                            <div class="col-lg-7 col-sm-auto"><input type="email" class="form-control borderR15" id="emailTeamMember" name="emailTeamMember" aria-describedby="emailHelp"></div>\
                        </div>';
        teamMember += '&nbsp;<button class="teamMemberdelete btn-danger text-white py-0 px-2" type=button style="border-radius: 5px;" title="刪除一組">&ndash;</button></div>';
        $('.teamMemberAdd').append(teamMember);
    });

    $(document).on('click', ".teamMemberdelete", function () {
        $(this).parent().remove();
    });

});